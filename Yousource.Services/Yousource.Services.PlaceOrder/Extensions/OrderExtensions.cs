namespace Yousource.Services.MailSender.Extensions
{
    using System.Collections.Generic;
    using System.Linq;
    using Yousource.Infrastructure.Messages.Customers.Requests;
    using Yousource.Infrastructure.Models.Customers;
    using Yousource.Services.MailSender.Data.Entities;

    public static class OrderExtensions
    {
        public static OrderEntity AsEntity(this PlaceOrderRequest request)
        {
            var result = new OrderEntity
            {
                SenderID = request.SenderID,
                SenderEmail = request.SenderEmail,
                SenderName = request.SenderName,
                RecipientID = request.RecipientID,
                RecipientEmail = request.RecipientEmail,
                RecipientName = request.RecipientName,
                Dedication = request.Dedication,
                TotalSpent = request.TotalSpent
                //// Assign all necessary fields e.g. when new fields are introduced
            };
            return result;
        }
    }
}