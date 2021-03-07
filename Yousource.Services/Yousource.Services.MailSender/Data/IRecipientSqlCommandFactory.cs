namespace Yousource.Services.MailSender.Data
{
    using System.Data.SqlClient;
    using Yousource.Services.MailSender.Data.Entities;

    public interface IRecipientSqlCommandFactory
    {
        SqlCommand CreateGetRecipientIDCommand(OrderEntity customer);

        SqlCommand CreateInsertRecipientCommand(OrderEntity customer);
    }
}
