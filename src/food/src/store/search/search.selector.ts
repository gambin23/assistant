import { Injectable } from '@angular/core';
import { recipesSkeleton } from '@assistant/food/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchSelector {

    recipesSubject$ = new BehaviorSubject(recipesSkeleton);
    isBusySubject$ = new BehaviorSubject(true);

    recipes$ = () => this.recipesSubject$.asObservable();
    isBusy$ = () => this.isBusySubject$.asObservable();
}
