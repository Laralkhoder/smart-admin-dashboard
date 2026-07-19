import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login-page/login-page').then((m) => m.LoginPage),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard-page/dashboard-page').then(
        (m) => m.DashboardPage,
      ),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users/pages/users-page/users-page').then((m) => m.UsersPage),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
