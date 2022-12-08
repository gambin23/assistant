import { NewRecipeEffects } from './new-recipe/new-recipe.effects';
import { createFeatureSelector } from '@ngrx/store';
import { FOOD_APP } from '@assistant/food/name';
import { RecipesState } from './recipes/recipes.model';
import { recipesReducer } from './recipes/recipes.reducer';
import { RecipesEffects } from './recipes/recipes.effects';
import { CalendarState } from './calendar/calendar.model';
import { calendarReducer } from './calendar/calendar.reducer';
import { CalendarEffects } from './calendar/calendar.effects';
import { newRecipeReducer } from './new-recipe/new-recipe.reducer';
import { NewRecipeState } from './new-recipe/new-recipe.model';


export interface FoodStore {
    recipes: RecipesState;
    calendar: CalendarState;
    newRecipe: NewRecipeState
}

export const reducers = {
    recipes: recipesReducer,
    calendar: calendarReducer,
    newRecipe: newRecipeReducer
};

export const effects = [
    RecipesEffects,
    CalendarEffects,
    NewRecipeEffects
];
