import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable, } from 'rxjs';
import { FOOD_APP } from '@assistant/food/name';
import { Recipe } from '@assistant/food/models';
import { FoodStore } from './../store';

export const selectNewRecipeState = createSelector(createFeatureSelector<FoodStore>(FOOD_APP.id), x => x.newRecipe);
export const selectNewRecipe = createSelector(selectNewRecipeState, x => x.data);

@Injectable({providedIn: 'root'})
export class NewRecipeSelector {

    constructor(private store: Store) { }

    recipe$ = (): Observable<Recipe> => this.store.select(selectNewRecipe);
}
