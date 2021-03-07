namespace Yousource.Services.DisplayOrder.Data
{
    using System.Collections.Generic;
    using System.Data.Common;
    using System.Linq;
    using System.Threading.Tasks;
    using Yousource.Infrastructure.Helpers;
    using Yousource.Infrastructure.Logging;
    using Yousource.Services.DisplayOrder.Data.Entities;
    using Yousource.Services.DisplayOrder.Exceptions;

    //// Data access class
    public class OrderSqlDataGateway : IOrderSqlDataGateway
    {
        private readonly ISqlHelper sql;
        private readonly ILogger logger;
        private readonly IOrderSqlCommandFactory factory;

        //// Inject necessary data access adapter like `ISqlHelper` and `ILogger`
        //// Inject command factory; Separates the creation of commands with parameters to be executed
        public OrderSqlDataGateway(
            ISqlHelper helper, 
            ILogger logger,
            IOrderSqlCommandFactory factory)
        {
            this.sql = helper;
            this.logger = logger;
            this.factory = factory;
        }

        public async Task<IEnumerable<DisplayOrderEntity>> DisplayOrdersAsync(DisplayOrderEntity customer)
        {
            var result = Enumerable.Empty<DisplayOrderEntity>();

            try
            {
                var command = this.factory.CreateDisplayOrdersCommand(customer);
                result = await this.sql.ReadAsListAsync<DisplayOrderEntity>(command);
            }
            catch (DbException ex)
            {
                //// Log, Wrap and Rethrow data-related exceptions
                this.logger.WriteException(ex);
                throw new CustomerDataException(ex);
            }

            return result;
        }

        public async Task<IEnumerable<DisplayOrderEntity>> GetAllOrdersAsync()
        {
            var result = Enumerable.Empty<DisplayOrderEntity>();

            try
            {
                var command = this.factory.CreateGetAllOrdersCommand();
                result = await this.sql.ReadAsListAsync<DisplayOrderEntity>(command);
            }
            catch (DbException ex)
            {
                //// Log, Wrap and Rethrow data-related exceptions
                this.logger.WriteException(ex);
                throw new CustomerDataException(ex);
            }

            return result;
        }
    }
}
