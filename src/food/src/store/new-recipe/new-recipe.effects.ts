import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
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
        mergeMap(([_, recipe, userId]) => {
            recipe = { ...recipe, dateCreated: new Date() }
            return this.recipesdata.add$(userId, recipe.id, recipe).pipe(
                map(() => newRecipeAddSuccess({ recipe })),
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
