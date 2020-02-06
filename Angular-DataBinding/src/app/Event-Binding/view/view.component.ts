import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
name:string;

no3:number;
  constructor() { }
public setName(){
  this.name='karthik';
}
public Greet(val:string){
  this.name=val;
}
public Add(val:number,val2:number){
  this.name='Result is';
this.no3=Number(val)+Number(val2);


}
public Sub(s:number,s1:number){
  this.name='Result is';
  this.no3=Number(s)-Number(s1);
}
  ngOnInit() {
  }

}
