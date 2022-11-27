import { AppRoutes } from '@assistant/common-sdk';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { SearchPageComponent } from './pages/search/search.component';
import { NewPageComponent } from './pages/new/new.component';
import { RecipesPageComponent } from './pages/recipes/recipes.component';
import { RecipePageComponent } from './pages/recipe/recipe.component';

export const routes: AppRoutes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'rectangle-list',
        component: DashboardPageComponent
    },
    {
        path: 'search',
        title: 'Search',
        icon: 'sun',
        component: SearchPageComponent
    },
    {
        path: 'new',
        title: 'New Recipe',
        icon: 'square-plus',
        component: NewPageComponent
    },
    {
        path: 'recipes',
        title: 'My Recipes',
        icon: 'address-book',
        children: [
            {
                path: '',
                component: RecipesPageComponent,
            },
            {
                path: ':id',
                component: RecipePageComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        hidden: true
    }
]
