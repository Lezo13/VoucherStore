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

    public static class DisplayOrdersExtensions
    {
        public static DisplayOrdersRequest AsRequest(this DisplayOrdersWebRequest request)
        {
            var result = new DisplayOrdersRequest
            {
                SenderEmail = request.SenderEmail
            };

            return result;
        }

        public static WebResponse<IEnumerable<OrdersWebModel>> AsWebResponse(this GetOrdersResponse response)
        {
            var result = new WebResponse<IEnumerable<OrdersWebModel>>(response.Data?.AsWebModel())
            {
                Message = response.Message,
                ErrorCode = response.ErrorCode,
                StatusCode = response.StatusCode
            };

            return result;
        }

        public static OrdersWebModel AsWebModel(this Orders model)
        {
            return new OrdersWebModel
            {
                OrderDate = model.OrderDate,
                OrderNo = model.OrderNo,
                TotalSpent = model.TotalSpent,
                SenderEmail = model.SenderEmail,
                SenderName = model.SenderName,
                RecipientEmail = model.RecipientEmail,
                RecipientName = model.RecipientName,
                Dedication = model.Dedication,
            };
        }

        public static IEnumerable<OrdersWebModel> AsWebModel(this IEnumerable<Orders> models)
        {
            return models.Select(entity => entity.AsWebModel());
        }
    }
}
