import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { App, AppsActions, AppRoutes } from '@assistant/common-sdk';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';


export const FOOD_APP: App = {
    id: 'food',
    name: 'Food',
    icon: 'utensils'
};

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
    constructor(private appsActions: AppsActions) {
        this.appsActions.loadApp({
            ...FOOD_APP,
            routes: foodRoutes
        });
    }
}
