import { Component } from '@angular/core';
import type { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {
  public customers: Customer[] = [
    {
      id: 4,
      name: 'Tim',
      credit: 25
    }
  ];
}
