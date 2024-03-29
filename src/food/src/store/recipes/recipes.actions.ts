import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { Recipe, Recipes } from '@assistant/food/models';

const prefix = '[FOOD] RECIPES -';
export const recipesLoad = createAction(`${prefix} Load`);
export const recipesLoadSuccess = createAction(`${prefix} Load Success`, props<{ recipes: Recipes }>());
export const recipesLoadError = createAction(`${prefix} Load Error`);
export const recipesAdd = createAction(`${prefix} Add`, props<{ recipe: Recipe }>());
export const recipesAddSuccess = createAction(`${prefix} Add Success`, props<{ recipe: Recipe }>());
export const recipesAddError = createAction(`${prefix} Add Error`);
export const recipesPatch = createAction(`${prefix} Patch`, props<{ id: string, recipe: Partial<Recipe> }>());
export const recipesPatchSuccess = createAction(`${prefix} Patch Success`, props<{ id: string, recipe: Partial<Recipe> }>());
export const recipesPatchError = createAction(`${prefix} Patch Error`);

@Injectable({ providedIn: 'root' })
export class RecipesActions {
    constructor(private store: Store) { }

    load = () => this.store.dispatch(recipesLoad());
    loadSuccess = (recipes: Recipes) => this.store.dispatch(recipesLoadSuccess({ recipes }));
    loadError = () => this.store.dispatch(recipesLoadError());

    add = (recipe: Recipe) => this.store.dispatch(recipesAdd({ recipe }));
    addSuccess = (recipe: Recipe) => this.store.dispatch(recipesAddSuccess({ recipe }));
    addError = () => this.store.dispatch(recipesAddError());

    patch = (id: string, recipe: Partial<Recipe>) => this.store.dispatch(recipesPatch({ id, recipe }));
    patchSuccess = (id: string, recipe: Partial<Recipe>) => this.store.dispatch(recipesPatchSuccess({ id, recipe }));
    patchError = () => this.store.dispatch(recipesPatchError());
}
