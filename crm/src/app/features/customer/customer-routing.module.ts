import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerIndexComponent } from './customer-index.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: CustomerIndexComponent,
    children: [
      {
        path: '',
        component: CustomerListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
