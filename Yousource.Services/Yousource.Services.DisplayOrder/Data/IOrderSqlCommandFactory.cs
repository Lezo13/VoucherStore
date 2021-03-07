namespace Yousource.Services.DisplayOrder.Data
{
    using System.Data.SqlClient;
    using Yousource.Services.DisplayOrder.Data.Entities;

    public interface IOrderSqlCommandFactory
    {
        SqlCommand CreateDisplayOrdersCommand(DisplayOrderEntity customer);
        SqlCommand CreateGetAllOrdersCommand();
    }
}
