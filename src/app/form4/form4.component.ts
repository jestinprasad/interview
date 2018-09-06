import { Component, OnInit, Input } from '@angular/core';
import { Form2Component } from '../form2/form2.component';

@Component({
  selector: 'form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {
  data: any;
  // @Input() data:any;
  constructor() { }

  ngOnInit() {

  }
  getData(data) {
    this.data = data;
    console.log(data, this.data);
  }

}
