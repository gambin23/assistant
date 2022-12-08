import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { FOOD_APP } from '@assistant/food/name';
import { FoodStore } from '../store';
import { Recipe, recipesSkeleton, recipeSkeleton } from '../../models/recipes';
import { RecipesFilters } from './recipes.model';

export const selectRecipesState = createSelector(createFeatureSelector<FoodStore>(FOOD_APP.id), x => x.recipes);
export const selectRecipesIsBusy = createSelector(selectRecipesState, x => x.isBusy);
const selectRecipes = (filters?: RecipesFilters) => createSelector(selectRecipesState, x => x.isBusy ? recipesSkeleton : Object.values(x.data));
const selectRecipe = (id: string) => createSelector(selectRecipesState, x => x.isBusy ? recipeSkeleton : x.data[id]);

@Injectable({ providedIn: 'root' })
export class RecipesSelector {

    constructor(private store: Store) { }

    recipes$(filters?: RecipesFilters): Observable<Recipe[]> {
        return this.store.select(selectRecipes(filters));
    }

    isBusy$(): Observable<boolean> {
        return this.store.select(selectRecipesIsBusy);
    }

    recipe$(id: string): Observable<Recipe | undefined> {
        return this.store.select(selectRecipe(id));
    }
}
