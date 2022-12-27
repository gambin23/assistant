import { map, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { RecipesFilters } from '@assistant/food/models';
import { SearchRecipesData } from '@assistant/food/data';
import { SearchSelector } from './search.selector';

@Injectable({ providedIn: 'root' })
export class SearchActions {

    constructor(
        private searchSelector: SearchSelector,
        private searchRecipesData: SearchRecipesData
    ) { }

    search = (filters: RecipesFilters) => {
        this.searchSelector.isBusySubject$.next(true);

        this.searchRecipesData.search$(filters).pipe(
            take(1),
            map(recipes => {
                this.searchSelector.recipesSubject$.next(recipes);
                this.searchSelector.isBusySubject$.next(false);
            })
        ).subscribe();
    }
}
