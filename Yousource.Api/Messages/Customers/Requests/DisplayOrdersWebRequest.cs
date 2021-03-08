namespace Yousource.Api.Messages.Customers.Requests
{
    using System.ComponentModel.DataAnnotations;
    using System.Text.Json.Serialization;
    using Newtonsoft.Json;

    public class DisplayOrdersWebRequest : WebRequest
    {
        [JsonProperty("SenderEmail")]
        public string SenderEmail { get; set; }
    }
}
