import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { User } from '../../model/user';

export const authFeatureKey = 'auth';

export interface State {
  // define state here
  user: User | null;
  error: string | null;
  loading: boolean;
}

export const initialState: State = {
  user: null,
  error: null,
  loading: false
};

export const reducer = createReducer(
  initialState,

  // Login
  on(AuthActions.login, state => {
    return {
      ...state,
      loading: true,
      error: null
    };
  }),
  on(AuthActions.loginSuccess, (state, { user }) => {
    return {
      ...state,
      user,
      loading: false
    };
  }),
  on(AuthActions.loginFailure, (state, { error }) => {
    return {
      ...state,
      error,
      loading: false
    };
  }),

  // Logout
  on(AuthActions.logout, state => {
    return {
      ...state,
      user: null
    };
  }
  )
);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer,
});

