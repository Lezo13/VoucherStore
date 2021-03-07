namespace Yousource.Infrastructure.Messages.Customers.Requests
{
    using System;
    using System.Runtime.Serialization;

    [DataContract]
    public class PlaceOrderRequest
    {
        [DataMember]
        public Guid RecipientID { get; set; }

        [DataMember]
        public string RecipientEmail { get; set; }

        [DataMember]
        public string RecipientName { get; set; }

        public Guid SenderID { get; set; }

        [DataMember]
        public string SenderEmail { get; set; }

        [DataMember]
        public string SenderName { get; set; }

        [DataMember]
        public string Dedication { get; set; }

        [DataMember]
        public int TotalSpent { get; set; }
    }
}
