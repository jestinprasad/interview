import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})



export class Form1Component implements OnInit {


  form1 = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    phone : new FormControl('', Validators.required),
    address : new FormGroup({
      street : new FormControl('', Validators.required),
      state : new FormControl('', Validators.required)
      
    })
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form1.value);
  }

  updateValue(){
    this.form1.patchValue({
      name : 'ram',
      phone : '9787819719',
      address: ({
        state : 'AP'
      })
    })
  }

}
