import { createFeatureSelector } from '@ngrx/store';
import { FOOD_APP } from '@assistant/food/name';
import { RecipesState } from './recipes/recipes.model';
import { recipesReducer } from './recipes/recipes.reducer';
import { RecipesEffects } from './recipes/recipes.effects';


export interface FoodStore {
    recipes: RecipesState;
}

export const reducers = {
    recipes: recipesReducer
};

export const effects = [
    RecipesEffects
]

export const foodStore = createFeatureSelector<FoodStore>(FOOD_APP.id);
