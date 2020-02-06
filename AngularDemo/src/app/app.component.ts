import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  num:number=30;
  imagepath:string='assets/images1/green.jpg';
  name:string="sai ";
  fname:string="saikarthik";
  mystyle:string="boldclass italicclass";
  variety:boolean=true;
  getname():string{
    this.fname=this.fname.toUpperCase()
    return this.fname+" "+this.name;
  }
  isdisabled:boolean=true;

}
