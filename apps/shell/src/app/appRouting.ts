import { Routes } from '@angular/router';
import { ShellComponent } from './modules/shell.component';

export const appRouting: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'shell',
        loadComponent: () =>
          import('./modules/shell.component').then((m) => m.ShellComponent),
      },
    ],
  },
];
