import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { Category } from '@assistant/food/models';

const prefix = '[FOOD CATEGORIES]';
export const categoriesLoad = createAction(`${prefix} Load`);
export const categoriesLoadSuccess = createAction(`${prefix} Success`, props<{ categories: Category[] }>());
export const categoriesLoadError = createAction(`${prefix} Error`);

@Injectable({ providedIn: 'root' })
export class CategoriesActions {
    constructor(private store: Store) { }

    load = () => this.store.dispatch(categoriesLoad());
    loadSuccess = (categories: Category[]) => this.store.dispatch(categoriesLoadSuccess({ categories }));
    loadError = () => this.store.dispatch(categoriesLoadError());
}
