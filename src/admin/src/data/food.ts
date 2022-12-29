import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { patchEntity } from '@assistant/data';
import { Recipe } from '@assistant/food/models';

@Injectable({ providedIn: 'root' })
export class FoodData {

    constructor(private store: AngularFirestore) { }

    patch$ = (id: string, recipe: Partial<Recipe>) => patchEntity<Recipe>(this.store, 'foodRecipes', id, recipe);
}
