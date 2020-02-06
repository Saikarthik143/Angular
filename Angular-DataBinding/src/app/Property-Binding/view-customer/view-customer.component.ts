import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  obj:Customer;

  constructor() {
    //this.url='https://www.w3schools.com/angular/angular_databinding.asp';
    this.obj=new Customer();
    this.obj.Cname='Ajay';
    this.obj.City='Pune';
    this.obj.Address="fdewfg";
    this.obj.Contact=132454678;
    this.obj.Email='sf@gmail.com';
   }

  ngOnInit() {
  }

}
