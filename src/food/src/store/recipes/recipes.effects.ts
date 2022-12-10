import { UserSelector } from '@assistant/common-sdk';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserRecipesData } from '@assistant/food/data';
import { recipesLoad, recipesLoadSuccess, recipesLoadError } from './recipes.actions';

@Injectable()
export class RecipesEffects {
    loadRecipes$ = createEffect(() => this.actions$.pipe(
        ofType(recipesLoad),
        concatLatestFrom(() => this.userSelector.userId$()),
        mergeMap(([_, userId])  => this.recipesData.all$(userId)
            .pipe(
                map(recipes => recipesLoadSuccess({recipes})),
                catchError(() => of(recipesLoadError()))
            ))
    ));

    constructor(
        private actions$: Actions,
        private recipesData: UserRecipesData,
        private userSelector: UserSelector
    ) { }
}
