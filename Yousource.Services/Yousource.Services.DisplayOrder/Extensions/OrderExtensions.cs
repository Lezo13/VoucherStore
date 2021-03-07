namespace Yousource.Services.DisplayOrder.Extensions
{
    using System.Collections.Generic;
    using System.Linq;
    using Yousource.Infrastructure.Messages.Customers.Requests;
    using Yousource.Infrastructure.Models.Customers;
    using Yousource.Services.DisplayOrder.Data.Entities;

    public static class OrderExtensions
    {
        public static DisplayOrderEntity AsEntity(this DisplayOrdersRequest request)
        {
            var result = new DisplayOrderEntity
            {
                SenderEmail = request.SenderEmail,
                //// Assign all necessary fields e.g. when new fields are introduced
            };

            return result;
        }

        public static IEnumerable<Orders> AsModel(this IEnumerable<DisplayOrderEntity> entities)
        {
            var result = entities.Select(entity => entity.AsModel());
            return result;
        }

        public static Orders AsModel(this DisplayOrderEntity entity)
        {
            var result = new Orders
            {
                OrderDate = entity.OrderDate,
                TotalSpent = entity.TotalSpent,
                SenderEmail = entity.SenderEmail,
                SenderName = entity.SenderName,
                RecipientEmail = entity.RecipientEmail,
                RecipientName = entity.RecipientName,
                Dedication = entity.Dedication
                //// Assign all necessary fields e.g. when new fields are introduced
            };

            return result;
        }
    }
}
