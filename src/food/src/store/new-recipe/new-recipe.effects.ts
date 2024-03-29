import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { alertAddSuccess, notificationAdd, UserSelector } from '@assistant/common-sdk';
import { UserRecipesData } from '@assistant/food/data';
import { FOOD_APP } from '@assistant/food/name';
import { NewRecipeSelector } from './new-recipe.selector';
import { newRecipeAdd, newRecipeAddSuccess, newRecipeAddError } from './new-recipe.actions';
import { routeFoodRecipe } from './../../routes';

@Injectable({ providedIn: 'root' })
export class NewRecipeEffects {
    add$ = createEffect(() => this.actions$.pipe(
        ofType(newRecipeAdd),
        concatLatestFrom(() => [this.newRecipeSelector.recipe$(), this.userSelector.userId$()]),
        mergeMap(([_, recipe, userId]) => {
            recipe = { ...recipe, dateCreated: new Date() }
            return this.recipesdata.add$(userId, recipe.id, recipe).pipe(
                switchMap(() => [
                    newRecipeAddSuccess({ recipe }),
                    alertAddSuccess(`${recipe.name} was added to your recipes.`, routeFoodRecipe(recipe.id)),
                    notificationAdd({ notification: { app: FOOD_APP.id, message: `${recipe.name} was added to your recipes.`, link: routeFoodRecipe(recipe.id) } })
                ]
                ),
                tap(() => this.router.navigateByUrl(routeFoodRecipe(recipe.id))),
                catchError(() => of(newRecipeAddError()))
            )
        })));

    constructor(
        private actions$: Actions,
        private newRecipeSelector: NewRecipeSelector,
        private userSelector: UserSelector,
        private recipesdata: UserRecipesData,
        private router: Router
    ) { }
}
