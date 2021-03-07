namespace Yousource.Services.MailSender.Data
{
    using System.Data.SqlClient;
    using Yousource.Services.MailSender.Data.Entities;

    public interface ISenderSqlCommandFactory
    {
        SqlCommand CreateGetSenderIDCommand(OrderEntity customer);

        SqlCommand CreateInsertSenderCommand(OrderEntity customer);
    }
}
