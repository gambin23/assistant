import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { FOOD_APP } from '@assistant/food/name';
import { Category } from '@assistant/food/models';
import { FoodStore } from '../store';
import { CategoriesState } from './categories.model';

export const selectCategoriesState = createSelector(createFeatureSelector<FoodStore>(FOOD_APP.id), x => x.categories);
export const selectCategories = createSelector(selectCategoriesState, x => x.data);
export const selectCategory = (id: string) => createSelector(selectCategoriesState, x => x.data.find(cat => cat.id === id));

@Injectable({ providedIn: 'root' })
export class CategoriesSelector {

    constructor(private store: Store) { }

    categoriesState$(): Observable<CategoriesState> {
        return this.store.select(selectCategoriesState);
    }

    categories$(): Observable<Category[]> {
        return this.store.select(selectCategories);
    }

    category$(id: string): Observable<Category | undefined> {
        return this.store.select(selectCategory(id));
    }
}
