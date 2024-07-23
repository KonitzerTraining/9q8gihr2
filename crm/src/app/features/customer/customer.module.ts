import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerIndexComponent } from './customer-index.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';


@NgModule({
  declarations: [
    CustomerIndexComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
