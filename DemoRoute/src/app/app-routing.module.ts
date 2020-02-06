import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstpageComponent } from './myDemo/firstpage.component';
import { SecondpageComponent } from './myDemo/secondpage.component';
import{AppComponent} from './app.component';
const routes:Routes=[
  {path:"secondpage" ,component: SecondpageComponent},
  {path:"firstpage",component:FirstpageComponent},
{path:"",redirectTo:"/firstpage",pathMatch:"full"},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
