import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/home/home').then((c) => c.Home)
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'about',
    loadComponent: () => import('../pages/about/about').then((c) => c.About)
  },
  {
    path: 'redux',
    loadComponent: () => import('../pages/redux/redux').then((c) => c.Redux)
  },
  {
    path: 'loader',
    loadComponent: () => import('../pages/loader/loader').then((c) => c.Loader)
  },
  {
    path: 'browser',
    loadComponent: () => import('../pages/browser/browser').then((c) => c.Browser)
  },
  {
    path: 'tokenizer',
    loadComponent: () => import('../pages/tokenizer/tokenizer').then((c) => c.Tokenizer)
  },
  {
    path: 'registry',
    loadComponent: () => import('../pages/registry/registry').then((c) => c.Registry)
  },
  {
    path: 'workshop',
    loadChildren: () => workshopRoutes
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () => import('../pages/not-found/not-found').then((c) => c.NotFound)
  }
];

const workshopRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/workshop/workshop').then((c) => c.Workshop)
  }
];
