import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, of } from 'rxjs';
import { NewRecipeSelector } from './new-recipe.selector';
import { newRecipeAdd, newRecipeAddSuccess, newRecipeAddError } from './new-recipe.actions';
import { RecipesService } from '../recipes/recipes.service';
import { routeFoodRecipe } from './../../routes';

@Injectable()
export class NewRecipeEffects {
    add$ = createEffect(() => this.actions$.pipe(
        ofType(newRecipeAdd),
        concatLatestFrom(() => this.newRecipeSelector.recipe$()),
        mergeMap(([_, recipe]) => this.recipesService.add$(recipe).pipe(
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
        private recipesService: RecipesService,
        private router: Router
    ) { }
}
