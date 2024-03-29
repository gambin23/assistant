import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CategoriesData } from '@assistant/food/data';
import { categoriesLoad, categoriesLoadSuccess, categoriesLoadError } from './categories.actions';

@Injectable({ providedIn: 'root' })
export class CategoriesEffects {
    load$ = createEffect(() => this.actions$.pipe(
        ofType(categoriesLoad),
        mergeMap(() => this.categoriesData.all$()
            .pipe(
                map(categories => categoriesLoadSuccess({categories})),
                catchError(() => of(categoriesLoadError()))
            ))
    ));

    constructor(
        private actions$: Actions,
        private categoriesData: CategoriesData
    ) { }
}
