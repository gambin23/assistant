import { AppRoutes } from '@assistant/common-sdk';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: AppRoutes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'table-list',
        component: DashboardComponent
    },
    {
        path: 'recipes',
        title: 'Recipes',
        icon: 'book',
        component: RecipesComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        hidden: true
    }
]
