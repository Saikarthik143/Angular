import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../Services/calculate.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service:CalculateService) { }

  ngOnInit() {
    console.log('Addition',this.service.Add(12,34));
    console.log('multiplicatin',this.service.Mul(10,3));
    console.log('Sub',this.service.Sub(20,8));
    console.log('name',this.service.Great('karthik'));
  }
    f(){
      console.log('name',this.service.Great('varma'));
    }
    g(){
      console.log('name',this.service.Great('Sarth'));
    }
}
