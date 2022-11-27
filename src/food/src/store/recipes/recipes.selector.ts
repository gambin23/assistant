import { createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { foodStore } from '../store';
import { Recipe, recipesSkeleton, recipeSkeleton } from '../../models/recipes';
import { RecipesFilters } from './recipes.model';

const selectRecipesState = createSelector(foodStore, x => x.recipes);
const selectIsBusy = createSelector(selectRecipesState, recipes => recipes.isBusy);
const selectRecipes = (filters: RecipesFilters) => createSelector(selectRecipesState, recipes => recipes.isBusy ? recipesSkeleton : Object.values(recipes.data));
const selectRecipe = (id: string) => createSelector(selectRecipesState, recipes => recipes.isBusy ? recipeSkeleton : recipes.data[id]);

@Injectable()
export class RecipesSelector {

    constructor(private store: Store) { }

    recipes$(filters: RecipesFilters): Observable<Recipe[]> {
        return this.store.select(selectRecipes(filters));
    }

    isBusy$(): Observable<boolean> {
        return this.store.select(selectIsBusy);
    }

    recipe$(id: string): Observable<Recipe | undefined> {
        return this.store.select(selectRecipe(id));
    }
}
