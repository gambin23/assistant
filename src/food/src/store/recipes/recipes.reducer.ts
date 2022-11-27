import { createReducer, on } from '@ngrx/store';
import { RecipesState } from './recipes.model';
import { recipesLoad, recipesLoadSuccess, recipesLoadError } from './recipes.actions';

const initialState: RecipesState = {
    data: {},
    isBusy: false,
    isError: false
};

export const recipesReducer = createReducer(
    initialState,
    on(recipesLoad, (state) => state = {
        ...state,
        isBusy: true,
        isError: false
    }),
    on(recipesLoadSuccess, (state, action) => state = {
        ...state,
        data: action.recipes,
        isBusy: false,
        isError: false
    }),
    on(recipesLoadError, (state) => state = {
        ...state,
        isBusy: false,
        isError: true
    })
);
