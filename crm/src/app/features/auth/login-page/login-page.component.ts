import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  loginFormGroup: FormGroup = inject(FormBuilder).group({
    email: ['tim@example.com', Validators.required],
    password: ['30945tiogsj98', Validators.required]
  });

}
