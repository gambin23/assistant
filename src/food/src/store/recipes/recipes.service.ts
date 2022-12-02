import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipes, recipesSkeleton } from '../../models/recipes';

@Injectable()
export class RecipesService {

    getAll$(): Observable<Recipes> {
        return of(Object.fromEntries(recipesSkeleton.map((recipe) => [recipe.id, recipe])));
    }
}
