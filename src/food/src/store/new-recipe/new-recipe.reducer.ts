import { createReducer, on } from '@ngrx/store';
import { setState } from '@assistant/common-sdk';
import { newRecipe, NewRecipeState } from './new-recipe.model';
import { newRecipePatch, newRecipeAddSuccess } from './new-recipe.actions';

const initialState: NewRecipeState = {
    data: newRecipe()
};

export const newRecipeReducer = createReducer(
    initialState,
    on(newRecipePatch, (state, action) => setState(state, { data: { ...state.data, ...action.recipe } })),
    on(newRecipeAddSuccess, (state) => setState(state, { data: newRecipe() }))
);
