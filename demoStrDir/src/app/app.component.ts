import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoStrDir';
  Customer:any[]=[{"name":'Ajay',"country":'Unknown',"age":21},{"name":'Varma',"country":'india',"age":22},
  {"name":'Sarath',"country":'Africa',"age":42},{"name":'Karthik',"country":'india',"age":22}];
  StudentbyCountry:any[]=[{
    "country":"india",
    "student":[{"name":"Sai","age":23},{"name":"Devendra","age":20}]},
    {"country":"Jamal","student":[{"name":"Adavinakodaka Ajay","age":23},{"name":"Sarat Kasak","age":60}]}
  ]
}

