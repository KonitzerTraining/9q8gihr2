import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBoxComponent } from './components/error-box/error-box.component';

@NgModule({
  declarations: [
    ErrorBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorBoxComponent
  ]
})
export class CoreModule { }
