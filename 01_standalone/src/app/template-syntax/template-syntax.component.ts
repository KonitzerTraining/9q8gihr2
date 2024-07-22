import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './template-syntax.component.html',
  styleUrl: './template-syntax.component.scss'
})
export class TemplateSyntaxComponent {
  public statusFlag = false;

  // explizit oder implizit public
  public textElement: string = 'Das ist ein Text';
  public valueNumber = 340059.9348;
  public buttonDisabled = true;
  public html = 'Das ist ein <strong>wichtiger</strong> Inhalt';
}
