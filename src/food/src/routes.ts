import { FOOD_APP } from './../name';
import { AppRoutes } from '@assistant/common-sdk';

export const routes: AppRoutes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'rectangle-list',
        loadComponent: () => import('./pages/dashboard/dashboard.component')
    },
    {
        path: 'search',
        title: 'Search',
        icon: 'sun',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/search/search.component')
            },
            {
                path: ':id',
                loadComponent: () => import('./pages/search-recipe/search-recipe.component')
            }
        ]
    },
    {
        path: 'new',
        title: 'New Recipe',
        icon: 'square-plus',
        loadComponent: () => import('./pages/new/new.component')
    },
    {
        path: 'recipes',
        title: 'My Recipes',
        icon: 'address-book',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/recipes/recipes.component')
            },
            {
                path: ':id',
                loadComponent: () => import('./pages/recipe/recipe.component')
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        hidden: true
    }
]

export const routeFood = (route: string) => `/${FOOD_APP.id}/${route}`;
export const routeFoodNewRecipe = routeFood('new');
export const routeFoodSearch = routeFood('search');
export const routeFoodSearchRecipe = (id: string) => routeFood(`search/${id}`);
export const routeFoodRecipes = routeFood('recipes');
export const routeFoodRecipe = (id: string) => routeFood(`recipes/${id}`);
