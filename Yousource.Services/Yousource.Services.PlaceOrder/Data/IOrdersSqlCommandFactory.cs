namespace Yousource.Services.PlaceOrder.Data
{
    using System.Data.SqlClient;
    using Yousource.Services.PlaceOrder.Data.Entities;

    public interface IOrdersSqlCommandFactory
    {
        SqlCommand CreateInsertOrdersCommand(OrderEntity customer);
    }
}
