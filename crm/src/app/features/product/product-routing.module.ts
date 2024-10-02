import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductIndexComponent } from './product-index.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { authGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'product',
    component: ProductIndexComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: ProductListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
