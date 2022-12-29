import { NewRecipeEffects } from './new-recipe/new-recipe.effects';
import { RecipesState } from './recipes/recipes.model';
import { recipesReducer } from './recipes/recipes.reducer';
import { RecipesEffects } from './recipes/recipes.effects';
import { CalendarState } from './calendar/calendar.model';
import { calendarReducer } from './calendar/calendar.reducer';
import { CalendarEffects } from './calendar/calendar.effects';
import { newRecipeReducer } from './new-recipe/new-recipe.reducer';
import { NewRecipeState } from './new-recipe/new-recipe.model';
import { CategoriesEffects } from './categories/categories.effects';
import { CategoriesState } from './categories/categories.model';
import { categoriesReducer } from './categories/categories.reducer';
import { AdminFoodEffects } from '@assistant/admin/store';

export interface FoodStore {
    recipes: RecipesState;
    calendar: CalendarState;
    newRecipe: NewRecipeState;
    categories: CategoriesState;
}

export const reducers = {
    recipes: recipesReducer,
    calendar: calendarReducer,
    newRecipe: newRecipeReducer,
    categories: categoriesReducer
};

export const effects = [
    RecipesEffects,
    CalendarEffects,
    NewRecipeEffects,
    CategoriesEffects,
    AdminFoodEffects
];
