namespace Yousource.Services.DisplayOrder.Data.Entities
{
    using System;

    public class DisplayOrderEntity
    {
        public DateTime OrderDate { get; set; }

        public Guid OrderNo { get; set; }

        public int TotalSpent { get; set; }

        public string SenderEmail { get; set; }

        public string SenderName { get; set; }

        public string RecipientEmail { get; set; }

        public string RecipientName { get; set; }

        public string Dedication { get; set; }
    }
}
