import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectErrorMessage, selectLoading, selectProducts } from '../../state/selectors/product.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products$ = inject(Store).select(selectProducts);
  loading$: Observable<boolean> = inject(Store).select(selectLoading);
  errorMessage$ = inject(Store).select(selectErrorMessage);
}
