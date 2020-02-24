import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ItemService } from '../Services/item.service';
import { Item } from '../Models/item';
@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  itemForm:FormGroup;
  submitted=false;
  list:Item[];
  item:Item;
  constructor(private builder:FormBuilder,private service:ItemService) 
  {
    this.service.GetAll().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err);
    })

  }

  ngOnInit() {
    this.itemForm=this.builder.group({
      id:[''],
      name:[''],
      price:[''],
      stock:['']
    });
  }
  get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.Add();
      alert(this.itemForm.value["id"])
  }

  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }
  Search()
  {
    let id=this.itemForm.value["id"];
    this.service.GetById(id).subscribe(res=>
      {
        this.item=res;
        console.log(this.item);
        this.itemForm.value["name"]=this.item.name;
        this.itemForm.value["price"]=this.item.price;
        

      })
    
  }
  Add(){
    this.item=new Item();
    this.item.itemid=this.itemForm.value["id"];
    this.item.name=this.itemForm.value["name"];
    this.item.price=Number(this.itemForm.value["price"]);
    this.item.stock=Number(this.itemForm.value["stock"]);
    console.log(this.item);
    this.service.Add(this.item).subscribe(res=>{
      console.log('Record Added')
    },err=>{
      console.log(err);
    })
  }
}
