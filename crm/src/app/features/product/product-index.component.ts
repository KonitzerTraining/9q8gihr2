import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductActions } from './state/actions/product.actions';

@Component({
  selector: 'app-product-index',
  template: `
    <h2 class="display-3">Produkte</h2>
    <router-outlet></router-outlet>
  `
})
export class ProductIndexComponent {

  #store = inject(Store)

  constructor() {
    this.#store.dispatch(ProductActions.loadProducts());
  }
}
