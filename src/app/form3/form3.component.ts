import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  form3 : FormGroup;
  items : FormArray;

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.form3 = this.fb.group({
      customerName :["",Validators.required],
      email : ["", Validators.required],
      items : this.fb.array([this.createItem()])
    });
   }

  

  createItem() {
    return this.fb.group({
      name : ["",Validators.required],
      description : ["", Validators.required],
      price : ["", Validators.required]
    })
  }

  


  addItem(){
    this.items = this.form3.get('items') as FormArray;
    this.items.push(this.createItem());
    console.log(this.items.length)
  }

  removeItem(index: number) {
    //control refers to your formarray
   const control = <FormArray>this.form3.controls['items'];
   // remove the chosen row
    control.removeAt(index);
}

  onSubmit(){
    console.log(this.form3.value);
  }

}
