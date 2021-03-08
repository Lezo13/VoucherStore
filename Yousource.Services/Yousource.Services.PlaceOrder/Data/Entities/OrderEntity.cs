namespace Yousource.Services.MailSender.Data.Entities
{
    using System;
    using System.Collections.Generic;

    public class OrderEntity
    {
        public Guid SenderID { get; set; }

        public Guid RecipientID { get; set; }

        public string SenderEmail { get; set; }

        public string SenderName { get; set; }

        public string RecipientEmail { get; set; }

        public string RecipientName { get; set; }

        public string Dedication { get; set; }

        public int TotalSpent { get; set; }
    }
}
