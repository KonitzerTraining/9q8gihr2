import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import { authFeature } from './state/reducers/auth.reducer';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', authFeature.reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
