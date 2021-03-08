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

    public static class CustomerExtensions
    {
        public static WebResponse AsWebResponse(this CreateCustomerResponse response)
        {
            var result = new WebResponse
            {
                Message = response.Message,
                ErrorCode = response.ErrorCode,
                StatusCode = response.StatusCode
            };

            return result;
        }
    }
}
