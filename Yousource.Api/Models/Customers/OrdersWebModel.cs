namespace Yousource.Api.Models.Customers
{
    using System;
    using Newtonsoft.Json;

    public class OrdersWebModel
    {

        [JsonProperty("OrderDate")]
        public DateTime OrderDate { get; set; }

        [JsonProperty("OrderNo")]
        public Guid OrderNo { get; set; }

        [JsonProperty("TotalSpent")]
        public int TotalSpent { get; set; }

        [JsonProperty("SenderEmail")]
        public string SenderEmail { get; set; }

        [JsonProperty("SenderName")]
        public string SenderName { get; set; }

        [JsonProperty("RecipientEmail")]
        public string RecipientEmail { get; set; }

        [JsonProperty("RecipientName")]
        public string RecipientName { get; set; }

        [JsonProperty("Dedication")]
        public string Dedication { get; set; }
    }
}
