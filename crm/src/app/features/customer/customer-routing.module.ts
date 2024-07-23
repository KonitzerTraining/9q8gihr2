import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerIndexComponent } from './customer-index.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: CustomerIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
