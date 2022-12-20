import { AppRoutes } from '@assistant/common-sdk';

export const routes: AppRoutes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'rectangle-list',
        loadComponent: () => import('./pages/dashboard/dashboard.component')
    },
    {
        path: 'users',
        title: 'Users',
        icon: 'user',
        loadComponent: () => import('./pages/users/users.component')
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        hidden: true
    }
]
