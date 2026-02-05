import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
