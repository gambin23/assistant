import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { App, AppsActions, AppRoutes } from '@assistant/common-sdk';
import { FOOD_APP } from '../name';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: AppRoutes = [
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

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class FoodAppModule {
    constructor(private appsActions: AppsActions) {
        this.appsActions.loadApp({ ...FOOD_APP, routes });
    }
}
