namespace Yousource.Services.MailSender.Data
{
    using System.Data;
    using System.Data.SqlClient;
    using Yousource.Services.MailSender.Data.Entities;

    public class SenderSqlCommandFactory : ISenderSqlCommandFactory
    {
        public SqlCommand CreateGetSenderIDCommand(OrderEntity customer)
        {
            var result = new SqlCommand("[dbo].[sp_GetSenderID]")
            {
                CommandType = CommandType.StoredProcedure,
                CommandTimeout = 60
            };
            result.Parameters.AddWithValue("@senderemail", customer.SenderEmail);
            result.Parameters.AddWithValue("@sendername", customer.SenderName);
            return result;
        }

        public SqlCommand CreateInsertSenderCommand(OrderEntity customer)
        {
            var result = new SqlCommand("[dbo].[sp_InsertSender]")
            {
                CommandType = CommandType.StoredProcedure,
                CommandTimeout = 60
            };
            result.Parameters.AddWithValue("@senderid", customer.SenderID);
            result.Parameters.AddWithValue("@senderemail", customer.SenderEmail);
            result.Parameters.AddWithValue("@sendername", customer.SenderName);
            //// Add all fields as parameters

            return result;
        }
    }
}