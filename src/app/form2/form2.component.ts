import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})

export class Form2Component implements OnInit {

  constructor(
    private fb : FormBuilder
  ) { }

  @Output() form2Data : EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  form2 = this.fb.group({
    tempData: this.fb.group({
      name : ['', Validators.required],
      phone : ['', Validators.required],
      address : this.fb.group({
        street : ['', Validators.required],
        state : ['', Validators.required]      
      })
    }),
    userDetails : this.fb.array([])

  });

  onSubmit(){
    console.log(this.form2.value);
    let datas = this.form2.get('userDetails') as FormArray;
    const data = 
    datas.push(this.form2.get('tempData'));
    this.form2Data.emit(datas)
  }

  updateValue(){
    this.form2.patchValue({
      name : "balu",
      address : ({
        state : "USA"
      })
    })
  }

}
