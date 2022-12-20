import { AppRoutes } from '@assistant/common-sdk';

export const routes: AppRoutes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'bars',
        loadComponent: () => import('./pages/dashboard/dashboard.component')
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        hidden: true
    }
]
