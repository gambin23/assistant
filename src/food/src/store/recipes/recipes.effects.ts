import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { alertAddSuccess, alertAddWarning, notificationAdd, UserSelector } from '@assistant/common-sdk';
import { UserRecipesData } from '@assistant/food/data';
import { recipesLoad, recipesLoadSuccess, recipesLoadError, recipesPatchSuccess, recipesPatchError, recipesPatch, recipesAdd, recipesAddError, recipesAddSuccess } from './recipes.actions';
import { RecipesSelector } from './recipes.selector';
import { routeFoodRecipe } from '../../routes';
import { FOOD_APP } from '@assistant/food/name';

@Injectable({ providedIn: 'root' })
export class RecipesEffects {
    load$ = createEffect(() => this.actions$.pipe(
        ofType(recipesLoad),
        concatLatestFrom(() => this.userSelector.userId$()),
        mergeMap(([_, userId]) => this.recipesData.all$(userId)
            .pipe(
                map(recipes => recipesLoadSuccess({ recipes })),
                catchError(() => of(recipesLoadError()))
            )
        )));

    add$ = createEffect(() => this.actions$.pipe(
        ofType(recipesAdd),
        concatLatestFrom(action => [this.userSelector.userId$(), this.recipesSelector.recipeExists$(action.recipe.id)]),
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

    patch$ = createEffect(() => this.actions$.pipe(
        ofType(recipesPatch),
        concatLatestFrom(() => this.userSelector.userId$()),
        mergeMap(([action, userId]) => this.recipesData.patch$(userId, action.id, action.recipe)
            .pipe(
                map(() => recipesPatchSuccess({ ...action })),
                catchError(() => of(recipesPatchError()))
            )
        )));

    constructor(
        private actions$: Actions,
        private recipesData: UserRecipesData,
        private userSelector: UserSelector,
        private recipesSelector: RecipesSelector
    ) { }
}
