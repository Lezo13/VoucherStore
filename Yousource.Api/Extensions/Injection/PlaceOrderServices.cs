namespace Yousource.Api.Extensions.Injection
{
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Yousource.Infrastructure.Interfaces;
    using Yousource.Services.PlaceOrder;
    using Yousource.Services.PlaceOrder.Data;

    public static class PlaceOrderServices
    {
        public static void InjectPlaceOrderService(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IEmailService, PlaceOrderService>();
            services.AddSingleton<ISenderSqlCommandFactory, SenderSqlCommandFactory>();
            services.AddSingleton<ISenderDataGateway, SenderSqlDataGateway>();
            services.AddSingleton<IRecipientSqlCommandFactory, RecipientSqlCommandFactory>();
            services.AddSingleton<IRecipientDataGateway, RecipientSqlDataGateway>();
            services.AddSingleton<IOrdersSqlCommandFactory, OrdersSqlCommandFactory>();
            services.AddSingleton<IOrdersDataGateway, OrdersSqlDataGateway>();
        }
    }
}
