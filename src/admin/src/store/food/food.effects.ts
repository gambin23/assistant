import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AdminFoodData } from '@assistant/admin/data';
import { SearchSelector } from '@assistant/food/store';
import { foodRecipePatch, foodRecipePatchError, foodRecipePatchSuccess } from './food.actions';

@Injectable({ providedIn: 'root' })
export class AdminFoodEffects {

    patch$ = createEffect(() => this.actions$.pipe(
        ofType(foodRecipePatch),
        mergeMap(action => this.foodData.patch$(action.id, action.recipe)
            .pipe(
                map(() => {
                    this.searchSelector.recipeSubject$.next({ ...this.searchSelector.recipeSubject$.value, ...action.recipe });
                    return foodRecipePatchSuccess({ ...action })
                }),
                catchError(() => of(foodRecipePatchError()))
            )
        )));

    constructor(
        private actions$: Actions,
        private foodData: AdminFoodData,
        private searchSelector: SearchSelector
    ) { }
}
