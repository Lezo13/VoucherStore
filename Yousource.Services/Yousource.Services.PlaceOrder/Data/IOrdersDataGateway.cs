namespace Yousource.Services.PlaceOrder.Data
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Yousource.Services.PlaceOrder.Data.Entities;

    public interface IOrdersDataGateway
    {
        Task InsertOrdersAsync(OrderEntity customer);
    }
}
