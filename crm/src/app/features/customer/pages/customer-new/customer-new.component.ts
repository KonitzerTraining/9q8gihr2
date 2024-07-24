import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import type { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html'
})
export class CustomerNewComponent {
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
    this.createCustomer(this.customerFormGroup.value);
  }

  createCustomer(customer: Partial<Customer>) {
    console.log(customer);
  }
}
