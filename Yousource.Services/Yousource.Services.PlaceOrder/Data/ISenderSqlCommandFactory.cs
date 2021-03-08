namespace Yousource.Services.PlaceOrder.Data
{
    using System.Data.SqlClient;
    using Yousource.Services.PlaceOrder.Data.Entities;

    public interface ISenderSqlCommandFactory
    {
        SqlCommand CreateGetSenderIDCommand(OrderEntity customer);

        SqlCommand CreateInsertSenderCommand(OrderEntity customer);
    }
}
