namespace Yousource.Api.Extensions.Customer
{
    using System.Collections.Generic;
    using System.Linq;
    using Yousource.Api.Messages;
    using Yousource.Api.Messages.Customers.Requests;
    using Yousource.Api.Models.Customers;
    using Yousource.Infrastructure.Messages.Customers.Requests;
    using Yousource.Infrastructure.Messages.Customers.Responses;
    using Yousource.Infrastructure.Models.Customers;

    public static class PlaceOrderExtensions
    {
        public static PlaceOrderRequest AsRequest(this PlaceOrderWebRequest request)
        {
            var result = new PlaceOrderRequest
            {
                SenderEmail = request.SenderEmail,
                SenderName = request.SenderName,
                RecipientEmail = request.RecipientEmail,
                RecipientName = request.RecipientName,
                Dedication = request.Dedication,
                TotalSpent = request.TotalSpent
            };

            return result;
        }

    }
}
