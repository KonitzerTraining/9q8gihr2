import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerIndexComponent } from './customer-index.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { provideHttpClient } from '@angular/common/http';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [
    CustomerIndexComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    // Shared Module
    CoreModule,
    CustomerRoutingModule
  ],
  providers: [
    provideHttpClient(),
  ]
})
export class CustomerModule { }
