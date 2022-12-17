import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, of, switchMap } from 'rxjs';
import { alertAddSuccess, alertAddWarning, notificationAdd, UserSelector } from '@assistant/common-sdk';
import { UserRecipesData } from '@assistant/food/data';
import { recipesAdd, recipesAddError, recipesAddSuccess } from './recipes.actions';
import { RecipesSelector } from './recipes.selector';
import { routeFoodRecipe } from '../../routes';
import { FOOD_APP } from '@assistant/food/name';

@Injectable()
export class RecipesEffectsNotifications {
    addSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(recipesAddSuccess),
        mergeMap(([action, userId, recipeExists]) => this.recipesData.add$(userId, action.recipe.id, action.recipe)
            .pipe(
                switchMap(() => {
                    if (recipeExists)
                        return [alertAddWarning(`${action.recipe.name} is already in your recipes.`)];
                    else
                        return [
                            recipesAddSuccess({ ...action }),
                            alertAddSuccess(`${action.recipe.name} was added to your recipes.`, routeFoodRecipe(action.recipe.id)),
                            notificationAdd({ notification: { app: FOOD_APP.id, message: `${action.recipe.name} was added to your recipes.`, link: routeFoodRecipe(action.recipe.id) } })
                        ]
                }),
                catchError(() => of(recipesAddError()))
            )
        )));

    constructor(
        private actions$: Actions,
        private recipesData: UserRecipesData,
        private userSelector: UserSelector,
        private recipesSelector: RecipesSelector
    ) { }
}
