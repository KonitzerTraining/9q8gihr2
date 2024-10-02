import { Component, inject } from '@angular/core';
import { AuthActions } from '../features/auth/state/actions/auth.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated } from '../features/auth/state/selectors/auth.selectors';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  #store: Store = inject(Store);
  isAuthenticated$: Observable<boolean> = this.#store.select(selectIsAuthenticated);


  logout(): void {
    this.#store.dispatch(AuthActions.logout());
  }
}
