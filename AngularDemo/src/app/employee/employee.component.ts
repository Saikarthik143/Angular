import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
FirstName:string="sai";
LastName:string="Karthik";
Email:string="avx@gmail.com";
Age:number=22;
 getStyle(){
   let styles={"font-style":"italic","color":"brown"};
   return styles;
 }
onClick()
{
  console.log("you ckjsfcjsi");
} 

}
