import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer';

export const selectProductState = createFeatureSelector<fromProduct.State>(
  fromProduct.productFeatureKey
);

export const selectProducts = createSelector(
  selectProductState,
  (state) => state.products
);

export const selectLoading = createSelector(
  selectProductState,
  (state) => state.loading
);

export const selectErrorMessage = createSelector(
  selectProductState,
  (state) => state.errorMessage
);
