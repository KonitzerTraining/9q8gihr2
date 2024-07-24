import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {

  customerFormGroup: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.customerFormGroup = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      credit: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ],
    });
  }
  
  formSubmit() {
    console.log(this.customerFormGroup.value);
    // this.createCustomer(this.customerFormGroup.value);
  }
}
