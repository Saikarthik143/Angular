import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name:string="Karthik";
  class:string="c";
  age:number=22;

  constructor() { }

  ngOnInit() {
  }

}
