namespace Yousource.Services.PlaceOrder.Data
{
    using System.Data;
    using System.Data.SqlClient;
    using Yousource.Services.PlaceOrder.Data.Entities;

    public class RecipientSqlCommandFactory : IRecipientSqlCommandFactory
    {
        public SqlCommand CreateGetRecipientIDCommand(OrderEntity customer)
        {
            var result = new SqlCommand("[dbo].[sp_GetRecipientID]")
            {
                CommandType = CommandType.StoredProcedure,
                CommandTimeout = 60
            };
            result.Parameters.AddWithValue("@recipientemail", customer.RecipientEmail);
            result.Parameters.AddWithValue("@recipientname", customer.RecipientName);
            return result;
        }

        public SqlCommand CreateInsertRecipientCommand(OrderEntity customer)
        {
            var result = new SqlCommand("[dbo].[sp_InsertRecipient]")
            {
                CommandType = CommandType.StoredProcedure,
                CommandTimeout = 60
            };
            result.Parameters.AddWithValue("@recipientid", customer.RecipientID);
            result.Parameters.AddWithValue("@recipientemail", customer.RecipientEmail);
            result.Parameters.AddWithValue("@recipientname", customer.RecipientName);
            //// Add all fields as parameters

            return result;
        }
    }
}