namespace Yousource.Services.DisplayOrder.Data
{
    using System.Data;
    using System.Data.SqlClient;
    using Yousource.Services.DisplayOrder.Data.Entities;

    public class OrderSqlCommandFactory : IOrderSqlCommandFactory
    {
        public SqlCommand CreateDisplayOrdersCommand(DisplayOrderEntity customer)
        {
            var result = new SqlCommand("[dbo].[sp_GetOrdersByEmail]")
            {
                CommandType = CommandType.StoredProcedure,
                CommandTimeout = 60
            };
            result.Parameters.AddWithValue("@senderEmail", customer.SenderEmail);

            return result;
        }

        public SqlCommand CreateGetAllOrdersCommand()
        {
            var result = new SqlCommand("[dbo].[sp_GetAllOrders]")
            {
                CommandType = CommandType.StoredProcedure,
                CommandTimeout = 60
            };

            return result;
        }
    }
}
