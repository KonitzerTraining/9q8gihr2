import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StartModule } from './features/start/start.module';

import { LegalModule } from './features/legal/legal.module';
import { CustomerModule } from './features/customer/customer.module';
import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, isDevMode } from '@angular/core';
import { ProductModule } from './features/product/product.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

registerLocaleData(localeDe, 'de-DE');

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,

    // Feature Module
    StartModule,
    CustomerModule,
    ProductModule,

    // HelpModule,
    LegalModule,

    // Basic Routing
    AppRoutingModule,

    StoreModule.forRoot({}, {}),

    EffectsModule.forRoot([]),

    StoreRouterConnectingModule.forRoot(),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'de-DE',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
