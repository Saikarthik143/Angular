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
    this.obj={Cname:'Varma',City:'Eluru',Address:'Sriram 0-12',Email:'avc@gmail.com',Contact:9098765543}
   }

  ngOnInit() {
  }

}
