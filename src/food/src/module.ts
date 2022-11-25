import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsActions } from '@assistant/common-sdk';
import { FOOD_APP } from '../name';
import { routes } from './routes';

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class FoodAppModule {
    constructor(private appsActions: AppsActions) {
        this.appsActions.loadApp({ ...FOOD_APP, routes });
    }
}
