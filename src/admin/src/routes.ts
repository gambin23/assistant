import { AppRoutes } from '@assistant/common-sdk';

export const routes: AppRoutes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'bars',
        loadComponent: () => import('./pages/dashboard/dashboard.component')
    },
    {
        path: 'users',
        title: 'Users',
        icon: 'user',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/users/users.component')
            },
            {
                path: ':id',
                loadComponent: () => import('./pages/user/user.component')
            }
        ]
    },
    {
        path: 'food',
        title: 'Food',
        icon: 'user',
        loadComponent: () => import('./pages/food/food.component')
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        hidden: true
    }
]
