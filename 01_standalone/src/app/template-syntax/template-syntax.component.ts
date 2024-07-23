import { CommonModule, registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';

import localeCH from '@angular/common/locales/de-CH';

import { FormsModule } from '@angular/forms';

import localeDe from '@angular/common/locales/de';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localeDe, 'de-DE');
registerLocaleData(localeCH, 'de-CH');

const standardCurrency = 'EUR';

@Component({
  selector: 'app-template-syntax',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    {
      // Default, wenn 
      provide: LOCALE_ID, useValue: 'de-DE'
    }
  ],
  templateUrl: './template-syntax.component.html',
  styleUrl: './template-syntax.component.scss'
})
export class TemplateSyntaxComponent {
  public statusFlag = true;
  public locale = 'de-CH';
  public cur = standardCurrency;
  // explizit oder implizit public
  public textElement: string = 'Das ist ein Text';
  public valueNumber = 98475.9348;
  public buttonDisabled = true;
  public html = 'Das ist ein <strong>wichtiger</strong> Inhalt';
  public date = new Date();

  public list = ['Element A', 'Element B'];

  clickHandler(e: Event) {
    console.log(e);
  }

  keydownHandler(e: KeyboardEvent) {
    console.log(e.key);
  }

  formsHandler(e: Event) {
    // e.preventDefault();
    console.log(this.amount);
  }

  amount = 0;
}
