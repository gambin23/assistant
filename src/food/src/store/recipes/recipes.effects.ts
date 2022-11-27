import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, of } from 'rxjs';
import { recipesLoad, recipesLoadSuccess, recipesLoadError } from './recipes.actions';
import { RecipesService } from './recipes.service';

@Injectable()
export class RecipesEffects {
    loadRecipes$ = createEffect(() => this.actions$.pipe(
        ofType(recipesLoad),
        mergeMap(() => this.recipesService.getAll$()
            .pipe(
                delay(1000),
                map(recipes => recipesLoadSuccess({recipes})),
                catchError(() => of(recipesLoadError()))
            ))
    ));

    constructor(
        private actions$: Actions,
        private recipesService: RecipesService
    ) { }
}
