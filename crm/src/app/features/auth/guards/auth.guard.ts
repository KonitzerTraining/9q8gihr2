import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../state/selectors/auth.selectors';
import { take, tap } from 'rxjs';

export const authGuard: CanActivateFn = () => {
    const store = inject(Store);
    const router = inject(Router);
    return store.select(selectIsAuthenticated).pipe(
        tap(isAuthenticated => {
            if (!isAuthenticated) {
                router.navigate(['/login']);
            }
        }),
        take(1)
    );
};
