import { Component, OnInit } from '@angular/core';

@Component({
 
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  title:string="Demo";
  name:string="karthik";
  date:string="31/07/97";

  constructor() { }

  ngOnInit() {
  }

}
