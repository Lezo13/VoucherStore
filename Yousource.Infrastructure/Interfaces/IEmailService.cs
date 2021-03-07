namespace Yousource.Infrastructure.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Yousource.Infrastructure.Messages.Customers.Requests;
    using Yousource.Infrastructure.Messages.Customers.Responses;

    public interface IEmailService
    {
        Task<CreateCustomerResponse> SendEmailAsync(PlaceOrderRequest request);
    }
}
