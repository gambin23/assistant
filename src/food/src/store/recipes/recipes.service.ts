import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe, Recipes, recipesSkeleton } from '../../models/recipes';

@Injectable({ providedIn: 'root' })
export class RecipesService {

    getAll$(): Observable<Recipes> {
        return of(Object.fromEntries(recipesSkeleton.map((recipe) => [recipe.id, recipe])));
    }

    add$(recipe: Recipe): Observable<boolean> {
        return of(true);
    }
}
