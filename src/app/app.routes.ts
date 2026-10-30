import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/about/about').then((page) => page.AboutPage),
  },
  {
    path: 'leistungen',
    loadComponent: () => import('./pages/services/services').then((page) => page.ServicesPage),
  },
  {
    path: 'terminvergabe',
    loadComponent: () =>
      import('./pages/appointments/appointments').then((page) => page.AppointmentsPage),
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./pages/contact/contact').then((page) => page.ContactPage),
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('./pages/imprint/imprint').then((page) => page.ImprintPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
