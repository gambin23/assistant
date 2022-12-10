import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, of } from 'rxjs';
import { UserSelector } from '@assistant/common-sdk';
import { UserRecipesData } from '@assistant/food/data';
import { NewRecipeSelector } from './new-recipe.selector';
import { newRecipeAdd, newRecipeAddSuccess, newRecipeAddError } from './new-recipe.actions';
import { routeFoodRecipe } from './../../routes';

@Injectable()
export class NewRecipeEffects {
    add$ = createEffect(() => this.actions$.pipe(
        ofType(newRecipeAdd),
        concatLatestFrom(() => [this.newRecipeSelector.recipe$(), this.userSelector.userId$()]),
        mergeMap(([_, recipe, userId]) => this.recipesdata.add$(userId, recipe).pipe(
            delay(1000),
            map(() => {
                this.router.navigateByUrl(routeFoodRecipe(recipe.id));
                return newRecipeAddSuccess({ recipe })
            }),
            catchError(() => of(newRecipeAddError()))
        ))
    ));

    constructor(
        private actions$: Actions,
        private newRecipeSelector: NewRecipeSelector,
        private userSelector: UserSelector,
        private recipesdata: UserRecipesData,
        private router: Router
    ) { }
}