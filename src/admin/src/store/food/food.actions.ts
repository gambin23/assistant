import { Injectable } from '@angular/core';
import { Store, createAction, props } from '@ngrx/store';
import { Recipe } from '@assistant/food/models';

export const foodRecipePatch = createAction('[ADMIN_FOOD] Recipe Patch', props<{ id: string, recipe: Partial<Recipe> }>());
export const foodRecipePatchSuccess = createAction('[ADMIN_FOOD] Recipe Patch Success', props<{ id: string, recipe: Partial<Recipe> }>());
export const foodRecipePatchError = createAction('[ADMIN_FOOD] Recipe Patch Error');

@Injectable({ providedIn: 'root' })
export class AdminFoodActions {

    constructor(private store: Store) { }

    recipePatch = (id: string, recipe: Partial<Recipe>) => this.store.dispatch(foodRecipePatch({ id, recipe }));
}
