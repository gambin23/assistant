import { Injectable } from '@angular/core';
import { Dictionary } from '@assistant/common-sdk';
import { Observable, of } from 'rxjs';
import { Recipe, recipesDictionary } from '../../models/recipes';

@Injectable()
export class RecipesService {

    getAll$(): Observable<Dictionary<Recipe>> {
        return of(recipesDictionary);
    }
}
