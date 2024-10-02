import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from '../state/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  #store: Store = inject(Store);

  loginFormGroup: FormGroup = inject(FormBuilder).group({
    email: ['tim@example.com', Validators.required],
    password: ['30945tiogsj98', Validators.required]
  });

  formSubmitHandler(): void {
    console.log(
      'LoginPageComponent.formSubmitHandler',
      this.loginFormGroup.value);

    // dispatch login action
    this.#store.dispatch(AuthActions.login({
      login: this.loginFormGroup.value
    }));
  }
}
