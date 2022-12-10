import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { getUserDictionary, patchUserObject } from '@assistant/data';
import { Recipe } from '@assistant/food/models';

@Injectable({ providedIn: 'root' })
export class UserRecipesData {

    constructor(private store: AngularFirestore) { }

    all$ = (userId: string) => getUserDictionary<Recipe>(this.store, userId, 'foodRecipes');
    add$ = (userId: string, recipe: Recipe) => of(true);
    patch$ = (userId: string, id: string, recipe: Partial<Recipe>) => patchUserObject(this.store, 'foodRecipes', userId, id, recipe);
}
