import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { map, Observable, } from 'rxjs';
import { orderBy } from 'lodash-es';
import { Recipe } from '@assistant/food/models';
import { FOOD_APP } from '@assistant/food/name';
import { FoodStore } from '../store';
import { recipesSkeleton, recipeSkeleton, RecipesFilters } from '../../models/recipe';

export const selectRecipesState = createSelector(createFeatureSelector<FoodStore>(FOOD_APP.id), x => x.recipes);
export const selectRecipesIsBusy = createSelector(selectRecipesState, x => x.isBusy);
const selectRecipes = (filters?: RecipesFilters) => createSelector(selectRecipesState, x => x.isBusy ? recipesSkeleton : filterRecipes(Object.values(x.data), filters));
const selectRecipesCount = createSelector(selectRecipesState, x => Object.values(x.data).filter(x => !x.isArchived).length);
const selectRecipe = (id: string) => createSelector(selectRecipesState, x => x.isBusy ? recipeSkeleton : x.data[id]);

@Injectable({ providedIn: 'root' })
export class RecipesSelector {

    constructor(private store: Store) { }

    recipes$ = (filters?: RecipesFilters): Observable<Recipe[]> => this.store.select(selectRecipes(filters));
    isBusy$ = (): Observable<boolean> => this.store.select(selectRecipesIsBusy);
    recipesCount$ = (): Observable<number> => this.store.select(selectRecipesCount);
    recipe$ = (id: string): Observable<Recipe | undefined> => this.store.select(selectRecipe(id));
    recipeExists$ = (id: string): Observable<boolean> => this.store.select(selectRecipe(id)).pipe(map(recipe => !!recipe));
}

const filterRecipes = (recipes: Recipe[], filters?: RecipesFilters) => {
    var predicates: ((recipe: Recipe) => boolean)[] = [];

    if (filters?.name) {
        predicates.push((recipe: Recipe) => recipe.name.toLowerCase().includes(filters?.name?.toLowerCase() || ''));
    }

    if (!filters?.isFavourite && !filters?.isArchived) {
        predicates.push((recipe: Recipe) => !recipe.isArchived);
    }

    if (filters?.isFavourite) {
        predicates.push((recipe: Recipe) => !!recipe.isFavourite && !recipe.isArchived);
    }

    if (filters?.isArchived) {
        predicates.push((recipe: Recipe) => !!recipe.isArchived);
    }

    if (filters?.categories?.length) {
        predicates.push((recipe: Recipe) => recipe.categories.some(c => filters?.categories!.includes(c)));
    }

    var result = recipes.filter(recipe => predicates.every(x => x(recipe)));
    return orderBy(result, x => x.name, filters?.sort || 'asc');
}
