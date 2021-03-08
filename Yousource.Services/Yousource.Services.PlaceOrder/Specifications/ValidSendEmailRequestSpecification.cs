namespace Yousource.Services.PlaceOrder.Specifications
{
    using System.Collections.Generic;
    using Yousource.Infrastructure.Messages.Customers.Requests;
    using Yousource.Infrastructure.Specifications;

    public class ValidSendEmailRequestSpecification : Specification<PlaceOrderRequest>
    {
        public override bool IsSatisfiedBy(PlaceOrderRequest entity, ref ICollection<string> errors)
        {
            errors = new List<string>(); // Added to avoid NullReferenceException
            if (string.IsNullOrEmpty(entity.SenderEmail))
            {
                errors.Add("Sender Email is required");
            }

            if (string.IsNullOrEmpty(entity.SenderName))
            {
                errors.Add("Sender Name is required");
            }

            if (string.IsNullOrEmpty(entity.RecipientEmail))
            {
                errors.Add("Recipient Email is required");
            }

            if (string.IsNullOrEmpty(entity.RecipientName))
            {
                errors.Add("Recipient Name is required");
            }

            var result = errors.Count == 0;

            return result;
        }
    }
}
