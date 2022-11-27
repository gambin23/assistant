import { createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { Dictionary } from '@assistant/common-sdk';
import { foodStore } from '../store';
import { Recipe, recipesDictionary, recipeSkeleton } from '../../models/recipes';

const selectRecipesState = createSelector(foodStore, x => x.recipes);
const selectIsBusy = createSelector(selectRecipesState, recipes => recipes.isBusy);
const selectRecipes = createSelector(selectRecipesState, recipes => recipes.isBusy ? recipesDictionary : recipes.data);
const selectRecipe = (id: string) => createSelector(selectRecipesState, recipes => recipes.isBusy ? recipeSkeleton : recipes.data[id]);

@Injectable()
export class RecipesSelector {

    constructor(private store: Store) { }

    recipes$(): Observable<Dictionary<Recipe>> {
        return this.store.select(selectRecipes);
    }

    isBusy$(): Observable<boolean> {
        return this.store.select(selectIsBusy);
    }

    recipe$(id: string): Observable<Recipe | undefined> {
        return this.store.select(selectRecipe(id));
    }
}
