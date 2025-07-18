import { Routes } from '@angular/router';
import { ShellComponent } from './shell.component';

export const shellRouting: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'cadastrar/:id',
        loadComponent: () =>
          import('./shell.component').then((m) => m.ShellComponent),
      },
    ],
  },
];
