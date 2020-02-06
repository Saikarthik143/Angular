import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './myDemo/firstpage.component';
import { SecondpageComponent } from './myDemo/secondpage.component';
const appRoutes:Routes=[
  {path:"secondpage" ,component: SecondpageComponent},
  {path:"firstpage",component:FirstpageComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
