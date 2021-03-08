namespace Yousource.Services.PlaceOrder.Data
{
    using System.Collections.Generic;
    using System.Data.Common;
    using System.Linq;
    using System.Threading.Tasks;
    using Yousource.Infrastructure.Helpers;
    using Yousource.Infrastructure.Logging;
    using Yousource.Services.PlaceOrder.Data.Entities;
    using Yousource.Services.PlaceOrder.Exceptions;

    //// Data access class
    public class RecipientSqlDataGateway : IRecipientDataGateway
    {
        private readonly ISqlHelper sql;
        private readonly ILogger logger;
        private readonly IRecipientSqlCommandFactory factory;

        //// Inject necessary data access adapter like `ISqlHelper` and `ILogger`
        //// Inject command factory; Separates the creation of commands with parameters to be executed
        public RecipientSqlDataGateway(
            ISqlHelper helper, 
            ILogger logger,
            IRecipientSqlCommandFactory factory)
        {
            this.sql = helper;
            this.logger = logger;
            this.factory = factory;
        }

        public async Task<string> GetRecipientIDAsync(OrderEntity customer)
        {
            var result = string.Empty;

            try
            {
                var command = this.factory.CreateGetRecipientIDCommand(customer);
                result = await this.sql.ReadSingleAsync(command);
            }
            catch (DbException ex)
            {
                //// Log, Wrap and Rethrow data-related exceptions
                this.logger.WriteException(ex);
                throw new CustomerDataException(ex);
            }

            return result;
        }

        public async Task InsertRecipientAsync(OrderEntity customer)
        {
            try
            {
                var command = this.factory.CreateInsertRecipientCommand(customer);
                await this.sql.ExecuteAsync(command);
            }
            catch (DbException ex)
            {
                //// Log, Wrap and Rethrow data-related exceptions
                this.logger.WriteException(ex);
                throw new CustomerDataException(ex);
            }
        }
    }
}