import { Component, inject } from '@angular/core';
/* import { ProductService } from '../../services/product.service'; */
import { Store } from '@ngrx/store';
import { selectLoading, selectProducts } from '../../state/selectors/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  //products$ = inject(ProductService).getProducts();

  products$ = inject(Store).select(selectProducts);
  loading$ = inject(Store).select(selectLoading);
}
 