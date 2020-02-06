import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer.component';
import { OnlineCustomerComponent } from './Customer/online-customer/online-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CustomerComponent,
    OnlineCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
