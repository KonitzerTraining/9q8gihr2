import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductActions } from '../actions/product.actions';
import { Product } from '../../model/product';

export const productFeatureKey = 'product';

export interface State {
  products: Product[],
  loading: boolean,
  errorMessage: string | null,

}

export const initialState: State = {
  products: [{
    id: 3,
    name: 'Produkt 3',
    price: 3.99,
    description: 'Das dritte Produkt',
  }],
  loading: false,
  errorMessage: null,
};

export const reducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, state => {
    return {
      ...state, // Spread-Operatore (ES6)
      loading: true,
      errorMessage: null,
    };
  }
  ),
  /*
  on(ProductActions.loadProductsSuccess, (state, action) => state),
  on(ProductActions.loadProductsFailure, (state, action) => state), */
);

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer,
});

