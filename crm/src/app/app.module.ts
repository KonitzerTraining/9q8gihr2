import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StartModule } from './features/start/start.module';

import { LegalModule } from './features/legal/legal.module';
import { CustomerModule } from './features/customer/customer.module';

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

    // HelpModule,
    LegalModule,

    // Basic Routing
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
