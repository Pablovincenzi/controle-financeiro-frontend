import { Routes } from '@angular/router';
import { ContasFinanceirasComponent } from './contas-financeiras.component';

export const contasFinanceirasRouting: Routes = [
  {
    path: '',
    component: ContasFinanceirasComponent,
    children: [
      {
        path: 'cadastrar/:id',
        loadComponent: () =>
          import('./cadastro/cadastro.component').then(
            (m) => m.CadastroComponent
          ),
      },
    ],
  },
];
