import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthActions } from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  #actions$: Actions = inject(Actions);
  #authService: AuthService = inject(AuthService);
  #router: Router = inject(Router);

  checkRoute$ = createEffect(() => {
    return this.#actions$.pipe(
      tap((action) => {
        console.log('action', action);
      })
    );
  }, { dispatch: false });


  login$ = createEffect(() => {
    return this.#actions$.pipe(

      ofType(AuthActions.login),
      exhaustMap(({ login }) =>
        this.#authService.getUser(login).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error }))))
      )
    );
  });

  logout$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        this.#router.navigate(['/login']);
      })
    );
  }, { dispatch: false });

}
