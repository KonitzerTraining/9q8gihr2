import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import type { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html'
})
export class CustomerNewComponent {

  public errorMessage: string | null = null;
  public loading = false;
  customerFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
  ) {
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
    // this.router.navigate(['/dashboard']);
    this.loading = true;
    this.errorMessage = null;
    this.customerService.postCustomer(customer)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
          // this.loading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.loading = false;
        }
      });
  }
}
