import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  obj:Student;

  constructor() {
    this.obj={Sid:1,Sname:'Karthik',Dob:new Date(2009,1,23),Std:'c',Age:22}
   }

  ngOnInit() {
  }

}
