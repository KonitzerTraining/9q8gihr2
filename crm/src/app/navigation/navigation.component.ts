import { Component, inject } from '@angular/core';
import { AuthActions } from '../features/auth/state/actions/auth.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated, selectUserName } from '../features/auth/state/selectors/auth.selectors';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  #store: Store = inject(Store);
  
  isAuthenticated$: Observable<boolean> = this.#store.select(selectIsAuthenticated);
  userName$ = this.#store.select(selectUserName);


  logout(): void {
    this.#store.dispatch(AuthActions.logout());
  }
}
