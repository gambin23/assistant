import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserSelector } from '@assistant/common-sdk';
import { UserRecipesData } from '@assistant/food/data';
import { recipesLoad, recipesLoadSuccess, recipesLoadError, recipesPatchSuccess, recipesPatchError, recipesPatch } from './recipes.actions';

@Injectable()
export class RecipesEffects {
    load$ = createEffect(() => this.actions$.pipe(
        ofType(recipesLoad),
        concatLatestFrom(() => this.userSelector.userId$()),
        mergeMap(([_, userId]) => this.recipesData.all$(userId)
            .pipe(
                map(recipes => recipesLoadSuccess({ recipes })),
                catchError(() => of(recipesLoadError()))
            ))
    ));

    patch$ = createEffect(() => this.actions$.pipe(
        ofType(recipesPatch),
        concatLatestFrom(() => this.userSelector.userId$()),
        mergeMap(([action, userId]) => this.recipesData.patch$(userId, action.id, action.recipe)
            .pipe(
                map(() => recipesPatchSuccess({ ...action })),
                catchError(() => of(recipesPatchError()))
            ))
    ));

    constructor(
        private actions$: Actions,
        private recipesData: UserRecipesData,
        private userSelector: UserSelector
    ) { }
}
