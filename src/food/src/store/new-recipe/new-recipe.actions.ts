import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { Recipe } from '@assistant/food/models';


const prefix = '[NEW RECIPE]';
export const newRecipePatch = createAction(`${prefix} Patch`, props<{ recipe: Partial<Recipe> }>());
export const newRecipeAdd = createAction(`${prefix} Add`);
export const newRecipeAddSuccess = createAction(`${prefix} Add Success`, props<{ recipe: Recipe }>());
export const newRecipeAddError = createAction(`${prefix} Add Error`);

@Injectable({ providedIn: 'root' })
export class NewRecipeActions {

    constructor(private store: Store) { }

    patch = (recipe: Partial<Recipe>) => this.store.dispatch(newRecipePatch({ recipe }));
    add = () => this.store.dispatch(newRecipeAdd());
}
