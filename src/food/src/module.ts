import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppsActions } from '@assistant/common-sdk';
import { FOOD_APP } from '../name';
import { routes } from './routes';
import { effects, reducers } from './store/store';
import { RecipesActions } from './store/recipes/recipes.actions';
import { CalendarActions } from './store/calendar/calendar.actions';

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        StoreModule.forFeature(FOOD_APP.id, reducers),
        EffectsModule.forFeature(effects),
    ]
})
export class FoodAppModule {
    constructor(
        private appsActions: AppsActions,
        private recipesActions: RecipesActions,
        private calendarActions: CalendarActions
    ) {
        this.appsActions.loadApp({ ...FOOD_APP, routes });
        this.recipesActions.load();
        this.calendarActions.load();
    }
}
