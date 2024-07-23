import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';

const customersMock: Customer[] = [
  {
    id: 4,
    name: 'Tim',
    credit: 25
  }
];

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
  
  public customers: Customer[] = [];

  // Dependency Injection
  constructor(
    public customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customers = customersMock;
    this.customerService.getAll()
  }

}
