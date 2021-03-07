namespace Yousource.Services.DisplayOrder
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Yousource.Infrastructure.Interfaces;
    using Yousource.Infrastructure.Logging;
    using Yousource.Infrastructure.Messages.Customers.Requests;
    using Yousource.Infrastructure.Messages.Customers.Responses;
    using Yousource.Services.DisplayOrder.Constants;
    using Yousource.Services.DisplayOrder.Data;
    using Yousource.Services.DisplayOrder.Exceptions;
    using Yousource.Services.DisplayOrder.Extensions;
    using Yousource.Services.DisplayOrder.Specifications;

    //// Service typically executes the operations needed e.g. CRUD.
    public class DisplayOrdersService : IDisplayOrdersService
    {
        private readonly IOrderSqlDataGateway dataGateway;
        private readonly ILogger logger;

        //// Inject dependencies. Usually data access dependencies i.e. Data Gateways
        public DisplayOrdersService(
            IOrderSqlDataGateway dataGateway,
            ILogger logger)
        {
            this.dataGateway = dataGateway;
            this.logger = logger;
        }

        public async Task<GetOrdersResponse> DisplayOrdersAsync(DisplayOrdersRequest request)
        {
            var result = new GetOrdersResponse();
            try
            {
                //// Convert Entity (Service) model to Shared (Infra) model using `AsModel` extension

                if (string.IsNullOrEmpty(request.SenderEmail))
                {
                    //// Decouple Service Models from Shared models i.e. Create `AsEntity` extension to convert vice-versa
                    result.Data = (await this.dataGateway.GetAllOrdersAsync()).AsModel();
                }
                else
                {
                    //// Decouple Service Models from Shared models i.e. Create `AsEntity` extension to convert vice-versa
                    result.Data = (await this.dataGateway.DisplayOrdersAsync(request.AsEntity())).AsModel();
                }

            }
            catch (Exception ex)
            {
                //// Wrap exception and rethrow
                this.logger.WriteException(ex);
                throw new CustomerServiceException(ex);
            }

            return result;
        }
    }
}
