import { Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';

export const routes: Routes = [
    {
        path: '',
        component: StartPageComponent
    },
    {
        path: 'template',
        component: TemplateSyntaxComponent
    }
];
