namespace Yousource.Services.PlaceOrder.Data
{
    using System.Threading.Tasks;
    using Yousource.Services.PlaceOrder.Data.Entities;

    public interface IRecipientDataGateway
    {
        Task<string> GetRecipientIDAsync(OrderEntity customer);

        Task InsertRecipientAsync(OrderEntity customer);
    }
}
