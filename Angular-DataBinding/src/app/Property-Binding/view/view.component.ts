import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Item:Student;
  constructor() { 
    this.Item=new Student();
    this.Item.Sid=2;
    this.Item.Sname="Sarath";
    this.Item.Std="b";
    this.Item.Age=23;
    this.Item.Dob=new Date(1997,6,23);

  }

  ngOnInit() {
  }

}
