import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, exhaustMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { AuthActions } from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';


@Injectable()
export class AuthEffects {

  #actions$: Actions = inject(Actions);
  #authService: AuthService = inject(AuthService);

  login$ = createEffect(() => {
    return this.#actions$.pipe(

      ofType(AuthActions.login),
      exhaustMap(({login}) =>
        this.#authService.getUser(login).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error }))))
      )
    );
  });

}
