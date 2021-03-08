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
    public class OrdersSqlDataGateway : IOrdersDataGateway
    {
        private readonly ISqlHelper sql;
        private readonly ILogger logger;
        private readonly IOrdersSqlCommandFactory factory;

        //// Inject necessary data access adapter like `ISqlHelper` and `ILogger`
        //// Inject command factory; Separates the creation of commands with parameters to be executed
        public OrdersSqlDataGateway(
            ISqlHelper helper,
            ILogger logger,
            IOrdersSqlCommandFactory factory)
        {
            this.sql = helper;
            this.logger = logger;
            this.factory = factory;
        }

        public async Task InsertOrdersAsync(OrderEntity customer)
        {
            try
            {
                var command = this.factory.CreateInsertOrdersCommand(customer);
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