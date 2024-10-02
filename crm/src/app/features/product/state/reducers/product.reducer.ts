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
  products: [],
  loading: false,
  errorMessage: null,
};

export const reducer = createReducer(
  initialState,

  // Load Products
  on(ProductActions.loadProducts, state => {
    return {
      ...state, // Spread-Operatore (ES6)
      loading: true,
      errorMessage: null,
    };
  }
  ),

  on(ProductActions.loadProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products,
      loading: false,
    };
  }
  ),

  on(ProductActions.loadProductsFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      errorMessage: error,
    };
  }),

  // Delete Product
  on(ProductActions.deleteProduct, state => {
    return {
      ...state,
      loading: true,
      errorMessage: null,
    };
  }
  ),
  on(ProductActions.deleteProductSuccess, (state, { productId }) => {
    return {
      ...state,
      products: state.products.filter(product => product.id !== productId),
      loading: false,
    };
  }),
  on(ProductActions.deleteProductFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      errorMessage: error,
    };
  }),
);

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer,
});

