namespace Yousource.Services.MailSender.Extensions
{
    using System;
    using System.Collections.Generic;
    using Yousource.Infrastructure.Messages.Customers.Requests;
    using Yousource.Services.MailSender.Data.Entities;

    public static class StringExtensions
    {
        public static string DecryptString(this string encryptedString)
        {
            byte[] binaryData;
            string decrypted;
            try
            {
                binaryData = Convert.FromBase64String(encryptedString);
                decrypted = System.Text.ASCIIEncoding.ASCII.GetString(binaryData);
            }
            catch (FormatException fe)
            {
                decrypted = string.Empty;
                Console.WriteLine(fe);
            }

            return decrypted;
        }

        public static string CreateOrderBody(this PlaceOrderRequest request)
        {
            string messageBody = string.Empty;

            messageBody += $"<img src = 'https://i.imgur.com/QyBjd5G.png' alt = 'Avatar' style = 'text-align: center; width:200px'> " +
                    $"<h1> Order Transaction</h1>" +
                    $"<img src = 'https://i.imgur.com/Vey5ZqF.png' alt = 'Avatar' style = 'text-align: center; width:200px'> " +
                    $"<p> Email: { request.SenderEmail} </p>" +
                    $"<p> Purchased by: { request.SenderName} </p>" +
                    $"<br><h2> A Gift for you { request.RecipientName}! </h2>" +
                    $"<p> To: { request.RecipientEmail} </p>" +
                    $"<br><h2> VOUCHER WORTH: ${ request.TotalSpent}! </h2>" +
                    $"<p> Dedication: { request.Dedication} </p> ";

            return messageBody;
        }
    }
}
