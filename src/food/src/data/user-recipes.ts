import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getUserDictionary, patchUserEntity, addUserEntity } from '@assistant/data';
import { Recipe } from '@assistant/food/models';

@Injectable({ providedIn: 'root' })
export class UserRecipesData {

    constructor(private store: AngularFirestore) { }

    all$ = (userId: string) => getUserDictionary<Recipe>(this.store, userId, 'foodRecipes');
    add$ = (userId: string, id: string, recipe: Recipe) => addUserEntity(this.store, userId, 'foodRecipes', id, recipe);
    patch$ = (userId: string, id: string, recipe: Partial<Recipe>) => patchUserEntity(this.store, userId, 'foodRecipes', id, recipe);
}
