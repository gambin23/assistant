import { createReducer, on } from '@ngrx/store';
import { setState } from '@assistant/common-sdk';
import { CategoriesState } from './categories.model';
import { categoriesLoad, categoriesLoadSuccess, categoriesLoadError } from './categories.actions';

const initialState: CategoriesState = {
    data: [],
    isBusy: false,
    isError: false
};

export const categoriesReducer = createReducer(
    initialState,
    on(categoriesLoad, (state) => setState(state, {
        isBusy: true,
        isError: false
    })),
    on(categoriesLoadSuccess, (state, action) => setState(state, {
        data: action.categories,
        isBusy: false,
        isError: false
    })),
    on(categoriesLoadError, (state) => setState(state, {
        isBusy: false,
        isError: true
    }))
);
