namespace Yousource.Infrastructure.Models.Customers
{
    using System;
    using System.Runtime.Serialization;

    [DataContract]
    public class Orders
    {
        [DataMember]
        public DateTime OrderDate { get; set; }

        [DataMember]
        public int TotalSpent { get; set; }

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
