namespace Yousource.Services.MailSender.Data
{
    using System.Threading.Tasks;
    using Yousource.Services.MailSender.Data.Entities;

    public interface IRecipientDataGateway
    {
        Task<string> GetRecipientIDAsync(OrderEntity customer);

        Task InsertRecipientAsync(OrderEntity customer);
    }
}
