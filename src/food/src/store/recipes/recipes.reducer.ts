import { createReducer, on } from '@ngrx/store';
import { setState } from '@assistant/common-sdk';
import { RecipesState } from './recipes.model';
import { recipesLoad, recipesLoadSuccess, recipesLoadError, recipesPatchSuccess } from './recipes.actions';
import { newRecipeAddSuccess } from './../new-recipe/new-recipe.actions';

const initialState: RecipesState = {
    data: {},
    isBusy: false,
    isError: false
};

export const recipesReducer = createReducer(
    initialState,
    on(recipesLoad, (state) => setState(state, {
        isBusy: true,
        isError: false
    })),
    on(recipesLoadSuccess, (state, action) => setState(state, {
        data: action.recipes,
        isBusy: false,
        isError: false
    })),
    on(recipesLoadError, (state) => setState(state, {
        isBusy: false,
        isError: true
    })),
    on(newRecipeAddSuccess, (state, action) => setState(state, {
        data: { ...state.data, [action.recipe.id]: action.recipe }
    })),
    on(recipesPatchSuccess, (state, action) => setState(state, {
        data:  {...state.data, [action.id]: {...state.data[action.id], ...action.recipe}}
    })),
);
