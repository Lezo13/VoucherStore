namespace Yousource.Services.MailSender.Data
{
    using System.Collections.Generic;
    using System.Data.Common;
    using System.Linq;
    using System.Threading.Tasks;
    using Yousource.Infrastructure.Helpers;
    using Yousource.Infrastructure.Logging;
    using Yousource.Services.MailSender.Data.Entities;
    using Yousource.Services.MailSender.Exceptions;

    //// Data access class
    public class SenderSqlDataGateway : ISenderDataGateway
    {
        private readonly ISqlHelper sql;
        private readonly ILogger logger;
        private readonly ISenderSqlCommandFactory factory;

        //// Inject necessary data access adapter like `ISqlHelper` and `ILogger`
        //// Inject command factory; Separates the creation of commands with parameters to be executed
        public SenderSqlDataGateway(
            ISqlHelper helper,
            ILogger logger,
            ISenderSqlCommandFactory factory)
        {
            this.sql = helper;
            this.logger = logger;
            this.factory = factory;
        }

        public async Task<string> GetSenderIDAsync(OrderEntity customer)
        {
            var result = string.Empty;

            try
            {
                var command = this.factory.CreateGetSenderIDCommand(customer);
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

        public async Task InsertSenderAsync(OrderEntity customer)
        {
            try
            {
                var command = this.factory.CreateInsertSenderCommand(customer);
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