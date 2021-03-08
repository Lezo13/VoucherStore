namespace Yousource.Services.PlaceOrder.Data
{
    using System.Data;
    using System.Data.SqlClient;
    using Yousource.Services.PlaceOrder.Data.Entities;

    public class OrdersSqlCommandFactory : IOrdersSqlCommandFactory
    {
        public SqlCommand CreateInsertOrdersCommand(OrderEntity customer)
        {
            var result = new SqlCommand("[dbo].[sp_InsertOrders]")
            {
                CommandType = CommandType.StoredProcedure,
                CommandTimeout = 60
            };
            result.Parameters.AddWithValue("@senderID", customer.SenderID);
            result.Parameters.AddWithValue("@recipientID", customer.RecipientID);
            result.Parameters.AddWithValue("@dedication", customer.Dedication);
            result.Parameters.AddWithValue("@totalSpent", customer.TotalSpent);
            //// Add all fields as parameters

            return result;
        }
    }
}