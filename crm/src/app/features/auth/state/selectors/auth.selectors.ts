import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectUserName = createSelector(
  selectAuthState,
  (state) => state.user?.username
);

export const selectLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

export const selectErrorMessage = createSelector(
  selectAuthState,
  (state) => state.error
);
