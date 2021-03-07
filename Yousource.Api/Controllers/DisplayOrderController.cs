namespace Yousource.Api.Controllers
{
    using System.Diagnostics;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Yousource.Api.Extensions;
    using Yousource.Api.Extensions.Customer;
    using Yousource.Api.Filters;
    using Yousource.Api.Messages.Customers.Requests;
    using Yousource.Infrastructure.Interfaces;

    //// Use the Page Controllers or Experience Controllers convention wherein
    //// we create controllers per "pages/experience" and not in a RESTful manner
    [Route("api/display_order")]
    public class DisplayOrderController : ControllerBase
    {
        private readonly IDisplayOrdersService service;

        //// Inject controller dependencies. Usually services
        public DisplayOrderController(IDisplayOrdersService service)
        {
            Debug.Assert(service != null, "Null dependencies");
            this.service = service;
        }

        [HttpPost]
        [AllowAnonymous]
        [ServiceFilter(typeof(ValidateModelStateAttribute))]
        [ServiceFilter(typeof(LogExceptionAttribute))]
        //// Controller code should only contain two lines i.e. invocation of service
        public async Task<IActionResult> DisplayOrdersAsync([FromBody] DisplayOrdersWebRequest request)
        {   
            var result = await this.service.DisplayOrdersAsync(request.AsRequest());
            return this.CreateResponse(result.AsWebResponse());
        }
    }
}
