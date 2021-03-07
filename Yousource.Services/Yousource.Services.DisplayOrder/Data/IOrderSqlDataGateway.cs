namespace Yousource.Services.DisplayOrder.Data
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Yousource.Services.DisplayOrder.Data.Entities;

    public interface IOrderSqlDataGateway
    {
        Task<IEnumerable<DisplayOrderEntity>> DisplayOrdersAsync(DisplayOrderEntity customer);
        Task<IEnumerable<DisplayOrderEntity>> GetAllOrdersAsync();
    }
}
