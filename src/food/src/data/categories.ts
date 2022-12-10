import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getList } from '@assistant/data';
import { Category } from '@assistant/food/models';

@Injectable({providedIn: 'root'})
export class CategoriesData {

    constructor(private store: AngularFirestore) { }

    all$ = () => getList<Category>(this.store, 'foodCategories');
}
