import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { Recipes } from '../../models/recipes';

const prefix = '[RECIPES]';
export const recipesLoad = createAction(`${prefix} Load`);
export const recipesLoadSuccess = createAction(`${prefix} Success`, props<{ recipes: Recipes }>());
export const recipesLoadError = createAction(`${prefix} Error`);

@Injectable({ providedIn: "root" })
export class RecipesActions {
    constructor(private store: Store) { }

    load() {
        this.store.dispatch(recipesLoad());
    }

    loadSuccess(recipes: Recipes) {
        this.store.dispatch(recipesLoadSuccess({ recipes }));
    }

    loadError() {
        this.store.dispatch(recipesLoadError());
    }
}
