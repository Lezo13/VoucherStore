namespace Yousource.Infrastructure.Messages.Customers.Requests
{
    using System;
    using System.Runtime.Serialization;

    [DataContract]
    public class DisplayOrdersRequest
    {
        [DataMember]
        public DateTime OrderDate { get; set; }

        [DataMember]
        public Guid OrderNo { get; set; }

        [DataMember]
        public string VoucherName { get; set; }

        [DataMember]
        public int ItemQty { get; set; }

        [DataMember]
        public double TotalPrice { get; set; }

        [DataMember]
        public string SenderEmail { get; set; }

        [DataMember]
        public string SenderName { get; set; }

        [DataMember]
        public string RecipientEmail { get; set; }

        [DataMember]
        public string RecipientName { get; set; }

        [DataMember]
        public string Dedication { get; set; }
    }
}
