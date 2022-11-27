import { createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { isEmpty } from 'lodash-es';
import { Dictionary } from '@assistant/common-sdk';
import { FoodStore, foodStore } from '../store';
import { Recipe, recipesDictionary } from '../../models/recipes';

const selectRecipesState = createSelector(foodStore, x => x.recipes);
const selectIsBusy = createSelector(selectRecipesState, recipes => recipes.isBusy);
const selectRecipes = createSelector(selectRecipesState, recipes => recipes.data);
const selectRecipe = (id: string) => createSelector(selectRecipesState, recipes => recipes.data[id]);

@Injectable()
export class RecipesSelector {

    constructor(private store: Store<FoodStore>) { }

    recipes$(): Observable<Dictionary<Recipe>> {
        return this.store.select(selectRecipes).pipe(map(recipes => isEmpty(recipes) ? recipesDictionary : recipes));
    }

    isBusy$(): Observable<boolean> {
        return this.store.select(selectIsBusy);
    }

    recipe$(id: string): Observable<Recipe> {
        return this.store.select(selectRecipe(id));
    }
}
