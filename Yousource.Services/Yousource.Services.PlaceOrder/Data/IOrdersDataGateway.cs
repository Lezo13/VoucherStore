namespace Yousource.Services.MailSender.Data
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Yousource.Services.MailSender.Data.Entities;

    public interface IOrdersDataGateway
    {
        Task InsertOrdersAsync(OrderEntity customer);
    }
}
