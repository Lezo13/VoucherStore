namespace Yousource.Services.DisplayOrder.Specifications
{
    using System.Collections.Generic;
    using Yousource.Infrastructure.Messages.Customers.Requests;
    using Yousource.Infrastructure.Specifications;

    public class ValidDisplayOrdersRequestSpecification : Specification<DisplayOrdersRequest>
    {
        public override bool IsSatisfiedBy(DisplayOrdersRequest entity, ref ICollection<string> errors)
        {
            errors = new List<string>(); // Added to avoid NullReferenceException
            if (string.IsNullOrEmpty(entity.SenderEmail))
            {
                errors.Add("Sender Email is required");
            }

            var result = errors.Count == 0;
            return result;
        }
    }
}
