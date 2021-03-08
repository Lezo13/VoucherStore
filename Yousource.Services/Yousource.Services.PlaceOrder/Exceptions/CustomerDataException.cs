﻿namespace Yousource.Services.PlaceOrder.Exceptions
{
    using System;

    public class CustomerDataException : Exception
    {
        public CustomerDataException(Exception innerException)
            : base(string.Empty, innerException)
        {
        }
    }
}
