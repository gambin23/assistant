import { AppRoutes } from '@assistant/common-sdk';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: AppRoutes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'rectangle-list',
        component: DashboardComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        hidden: true
    }
]
