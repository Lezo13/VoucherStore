namespace Yousource.Api.Extensions.Injection
{
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Yousource.Infrastructure.Interfaces;
    using Yousource.Services.DisplayOrder;
    using Yousource.Services.DisplayOrder.Data;

    public static class DisplayOrderServices
    {
        public static void InjectDisplayOrderService(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IDisplayOrdersService, DisplayOrdersService>();
            services.AddSingleton<IOrderSqlCommandFactory, OrderSqlCommandFactory>();
            services.AddSingleton<IOrderSqlDataGateway, OrderSqlDataGateway>();
        }
    }
}
