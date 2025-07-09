import { Routes } from '@angular/router';

export const appRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contas-financeiras',
  },
  {
    path: 'contas-financeiras',
    loadChildren: () =>
      import('./modules/contas-financeiras.routing').then(
        (m) => m.contasFinanceirasRouting
      ),
  },
];
