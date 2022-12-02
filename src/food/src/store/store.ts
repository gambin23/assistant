import { createFeatureSelector } from '@ngrx/store';
import { FOOD_APP } from '@assistant/food/name';
import { RecipesState } from './recipes/recipes.model';
import { recipesReducer } from './recipes/recipes.reducer';
import { RecipesEffects } from './recipes/recipes.effects';
import { CalendarState } from './calendar/calendar.model';
import { calendarReducer } from './calendar/calendar.reducer';
import { CalendarEffects } from './calendar/calendar.effects';


export interface FoodStore {
    recipes: RecipesState;
    calendar: CalendarState;
}

export const reducers = {
    recipes: recipesReducer,
    calendar: calendarReducer
};

export const effects = [
    RecipesEffects,
    CalendarEffects
]

export const foodStore = createFeatureSelector<FoodStore>(FOOD_APP.id);
