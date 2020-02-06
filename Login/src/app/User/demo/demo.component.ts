import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/Model/login';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
obj:Login;
  constructor() {
    this.obj=new Login();
   }

  ngOnInit() {
  }
  public Login(val:string,val1:string){
    if((val=="Admin")&&(val1=="12345"))
    console.log("login Success");
    else
    console.log("login fail");

  }
}
