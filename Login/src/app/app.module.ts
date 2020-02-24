import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CalculateService } from './Services/calculate.service';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from '@angular/common/Http';
import { ItemService } from './Services/item.service';
import { ViewallComponent } from './viewall/viewall.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TestComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CalculateService,ItemService],
  bootstrap: [ViewallComponent]
})
export class AppModule { }
