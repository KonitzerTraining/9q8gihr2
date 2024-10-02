import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {LibComponent} from '@acme/lib';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LibComponent],
  selector: 'app-root',
  template: ` 
    <h2>Hello World </h2>
    <lib-lib></lib-lib>
    `
})
export class AppComponent {
  title = 'crm';
}
