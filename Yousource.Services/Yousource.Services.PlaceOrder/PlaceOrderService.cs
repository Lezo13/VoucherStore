﻿namespace Yousource.Services.PlaceOrder
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net.Mail;
    using System.Threading.Tasks;
    using Yousource.Infrastructure.Interfaces;
    using Yousource.Infrastructure.Logging;
    using Yousource.Infrastructure.Messages.Customers.Requests;
    using Yousource.Infrastructure.Messages.Customers.Responses;
    using Yousource.Services.PlaceOrder.Constants;
    using Yousource.Services.PlaceOrder.Data;
    using Yousource.Services.PlaceOrder.Exceptions;
    using Yousource.Services.PlaceOrder.Extensions;
    using Yousource.Services.PlaceOrder.Specifications;

    //// Service typically executes the operations needed e.g. CRUD.
    public class PlaceOrderService : IEmailService
    {
        private readonly IOrdersDataGateway ordersdataGateway;
        private readonly ISenderDataGateway senderdataGateway;
        private readonly IRecipientDataGateway recipientdataGateway;
        private readonly ILogger logger;

        //// Inject dependencies. Usually data access dependencies i.e. Data Gateways
        public PlaceOrderService(
            IOrdersDataGateway ordersdataGateway,
            ISenderDataGateway senderdataGateway,
            IRecipientDataGateway recipientdataGateway,
            ILogger logger)
        {
            this.ordersdataGateway = ordersdataGateway;
            this.senderdataGateway = senderdataGateway;
            this.recipientdataGateway = recipientdataGateway;
            this.logger = logger;
        }
        
        public async Task<CreateCustomerResponse> SendEmailAsync(PlaceOrderRequest request)
        {
            var result = new CreateCustomerResponse();
            var errors = Enumerable.Empty<string>() as ICollection<string>;
            try
            {
                var spec = new ValidSendEmailRequestSpecification();

                //// Validate using Specification classes. You can leverage factories to inject
                //// your specifications if it touches the SMTP Server
                if (spec.IsSatisfiedBy(request, ref errors))
                {
                    MailMessage mail = new MailMessage();
                    SmtpClient smtpServer = new SmtpClient(SmtpData.SmtpServer.DecryptString());

                    mail.From = new MailAddress(SmtpData.SmtpEmail.DecryptString());
                    mail.Subject = $"[Xtra giftcard] Vouchers Ordered by {request.SenderName}";

                    mail.Body = request.CreateOrderBody();
                    mail.IsBodyHtml = true;

                    mail.To.Add(request.RecipientEmail);

                    smtpServer.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtpServer.Port = SmtpData.Port;
                    smtpServer.UseDefaultCredentials = false;
                    smtpServer.Credentials = new System.Net.NetworkCredential(SmtpData.SmtpEmail.DecryptString(), SmtpData.SmtpPassword.DecryptString());
                    smtpServer.EnableSsl = true;

                    await smtpServer.SendMailAsync(mail);
                }
                else
                {
                    //// Communicate Specification-added errors, and return appropriate error.
                    result.SetError(Errors.CreateValidationError, errors);
                }
                
                var emailEntity = request.AsEntity();

                Guid senderID;
                string strSenderID = await this.senderdataGateway.GetSenderIDAsync(emailEntity);

                if (!string.IsNullOrEmpty(strSenderID)) 
                {
                    senderID = new Guid(strSenderID);
                    emailEntity.SenderID = senderID;
                }
                else
                {
                    senderID = Guid.NewGuid();
                    emailEntity.SenderID = senderID;
                    await this.senderdataGateway.InsertSenderAsync(emailEntity);
                }

                Guid recipientID;
                string strRecipientID = await this.recipientdataGateway.GetRecipientIDAsync(emailEntity);
                if (!string.IsNullOrEmpty(strRecipientID))
                {
                    recipientID = new Guid(strRecipientID);
                    emailEntity.RecipientID = recipientID;
                }
                else
                {
                    recipientID = Guid.NewGuid();
                    emailEntity.RecipientID = recipientID;
                    await this.recipientdataGateway.InsertRecipientAsync(emailEntity);
                }

                await this.ordersdataGateway.InsertOrdersAsync(emailEntity);
            }
            catch (Exception ex)
            {
                //// Log and Wrap exception then rethrow
                this.logger.WriteException(ex);
                throw new CustomerServiceException(ex);
            }

            return result;
        }
    }
}
