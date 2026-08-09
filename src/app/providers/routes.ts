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
    path: 'sfdct',
    loadComponent: () => import('../pages/sfdct/sfdct').then((c) => c.Sfdct)
  },
  {
    path: 'browser',
    loadComponent: () => import('../pages/browser/browser').then((c) => c.Browser)
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
