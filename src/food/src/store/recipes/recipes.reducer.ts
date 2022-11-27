import { createReducer, on } from '@ngrx/store';
import { setState } from '@assistant/common-sdk';
import { RecipesState } from './recipes.model';
import { recipesLoad, recipesLoadSuccess, recipesLoadError } from './recipes.actions';

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
    }))
);
