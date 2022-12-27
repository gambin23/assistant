import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Recipe, RecipesFilters } from '@assistant/food/models';
import { map, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchRecipesData {

    constructor(private store: AngularFirestore) { }

    search$ = (filters: RecipesFilters) => this.store.collection<Recipe>('foodRecipes', data => {
        var recipes = data.orderBy('name', filters.sort)
            .orderBy('dateCreated', 'desc')
            .where('name', '>=', filters.name)
            .where('name', '<', filters.name + 'z');

        if (filters.categories && filters.categories.length > 0)
            recipes = recipes.where('categories', 'array-contains-any', filters.categories);

        return recipes;
    }).valueChanges().pipe(take(1));
}
