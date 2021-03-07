namespace Yousource.Api.Messages.Customers.Requests
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using Newtonsoft.Json;

    public class PlaceOrderWebRequest : WebRequest
    {
        [JsonProperty("SenderEmail")]
        [Required]
        public string SenderEmail { get; set; }

        [JsonProperty("SenderName")]
        [Required]
        public string SenderName { get; set; }

        [JsonProperty("RecipientEmail")]
        [Required]
        public string RecipientEmail { get; set; }

        [JsonProperty("RecipientName")]
        [Required]
        public string RecipientName { get; set; }

        [JsonProperty("Dedication")]
        public string Dedication { get; set; }

        [JsonProperty("TotalSpent")]
        public int TotalSpent { get; set; }

    }
}
