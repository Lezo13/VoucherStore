import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { DataService } from './core/services/orderService/SelectVoucher.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/home-header/home-header.component';
import { DetailsPanelComponent } from './home/details-panel/details-panel.component';
import { OrderComponent } from './order/order.component';
import { OrderlistComponent } from './vieworders/orderlist.component';
import { OrderHeaderComponent } from './order/order-header/order-header.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderlistHeaderComponent } from './vieworders/orderlist-header/orderlist-header.component';
import { OrderlistTableComponent } from './vieworders/orderlist-body/orderlist-table/orderlist-table.component';
import { OrderlistBodyComponent } from './vieworders/orderlist-body/orderlist-body.component';
import { OrderlistTopComponent } from './vieworders/orderlist-body/orderlist-top/orderlist-top.component';
import { OrderSelectmodalComponent } from './order/order-items/order-selectmodal/order-selectmodal.component';
import { OrderCartComponent } from './order/order-header/order-cart/order-cart.component';
import { OrderformComponent } from './orderform/orderform.component';
import { OrderformHeaderComponent } from './orderform/orderform-header/orderform-header.component';
import { OrderformBodyComponent } from './orderform/orderform-body/orderform-body.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { httpInterceptProviders } from './core/http-interceptor/interceptor';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetailsPanelComponent,
    OrderComponent,
    OrderlistComponent,
    OrderHeaderComponent,
    OrderItemsComponent,
    OrderlistHeaderComponent,
    OrderlistTableComponent,
    OrderlistBodyComponent,
    OrderlistTopComponent,
    OrderSelectmodalComponent,
    OrderCartComponent,
    OrderformComponent,
    OrderformHeaderComponent,
    OrderformBodyComponent,
    SpinnerComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService, httpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
