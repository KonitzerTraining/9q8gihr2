import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <app-navigation></app-navigation>
  
  <div class="container py-4">
    <h1 class="display-3">CRM</h1>
    <router-outlet></router-outlet>
  </div>
  
  `
})
export class AppComponent { }
