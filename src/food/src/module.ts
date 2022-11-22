import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppActions, AppRoutes } from '@assistant/common-sdk';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';


export const APP_NAME_FOOD = 'food';

const foodRoutes: AppRoutes = [
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
    }
]

@NgModule({
    imports: [
        RouterModule.forChild([
            ...foodRoutes,
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ])
    ]
})
export class FoodAppModule {
    constructor(private appActions: AppActions) {
        this.appActions.loadApp({
            name: APP_NAME_FOOD,
            icon: 'utensils',
            routes: foodRoutes
        });
    }
}
