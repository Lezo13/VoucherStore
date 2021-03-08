namespace Yousource.Services.MailSender.Data
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Yousource.Services.MailSender.Data.Entities;

    public interface ISenderDataGateway
    {
        Task<string> GetSenderIDAsync(OrderEntity customer);

        Task InsertSenderAsync(OrderEntity customer);
    }
}
