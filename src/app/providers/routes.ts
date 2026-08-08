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
    loadChildren: () => reduxRoutes
  },
  {
    path: 'loader',
    loadChildren: () => loaderRoutes
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

const reduxRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/redux/redux').then((c) => c.Redux)
  }
];

const loaderRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/loader/loader').then((c) => c.Loader)
  }
];

const workshopRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/workshop/workshop').then((c) => c.Workshop)
  }
];
