import { Injectable } from '@angular/core';
import { recipeSkeleton, recipesSkeleton } from '@assistant/food/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchSelector {

    recipesSubject$ = new BehaviorSubject(recipesSkeleton);
    recipeSubject$ = new BehaviorSubject(recipeSkeleton);
    isBusySubject$ = new BehaviorSubject(true);

    recipes$ = () => this.recipesSubject$.asObservable();
    recipe$ = (id: string) => this.recipeSubject$.asObservable();
    isBusy$ = () => this.isBusySubject$.asObservable();
}
