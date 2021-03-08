namespace Yousource.Services.PlaceOrder.Data
{
    using System.Data.SqlClient;
    using Yousource.Services.PlaceOrder.Data.Entities;

    public interface IRecipientSqlCommandFactory
    {
        SqlCommand CreateGetRecipientIDCommand(OrderEntity customer);

        SqlCommand CreateInsertRecipientCommand(OrderEntity customer);
    }
}
