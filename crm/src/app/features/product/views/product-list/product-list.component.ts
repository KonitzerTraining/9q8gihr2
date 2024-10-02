import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectErrorMessage, selectLoading, selectProducts } from '../../state/selectors/product.selectors';
import { Observable } from 'rxjs';
import { ProductActions } from '../../state/actions/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {


  #store: Store = inject(Store);
  products$ = this.#store.select(selectProducts);
  loading$: Observable<boolean> = this.#store.select(selectLoading);
  errorMessage$ = this.#store.select(selectErrorMessage);

  loadProducts() {
    this.#store.dispatch(ProductActions.loadProducts());
  }

  deleteProduct(productId: number) {
    console.log('delete product', productId);
  }
}
