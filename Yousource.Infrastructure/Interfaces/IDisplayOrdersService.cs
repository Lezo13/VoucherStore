namespace Yousource.Infrastructure.Interfaces
{
    using System.Threading.Tasks;
    using Yousource.Infrastructure.Messages.Customers.Requests;
    using Yousource.Infrastructure.Messages.Customers.Responses;

    public interface IDisplayOrdersService
    {
        Task<GetOrdersResponse> DisplayOrdersAsync(DisplayOrdersRequest request);
    }
}
