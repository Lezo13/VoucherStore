namespace Yousource.Services.MailSender.Data
{
    using System.Data.SqlClient;
    using Yousource.Services.MailSender.Data.Entities;

    public interface IOrdersSqlCommandFactory
    {
        SqlCommand CreateInsertOrdersCommand(OrderEntity customer);
    }
}
