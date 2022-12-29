import { Injectable } from '@angular/core';
import { FoodData } from '@assistant/admin/data';

@Injectable({ providedIn: 'root' })
export class FoodActions {

    constructor(private foodData: FoodData) { }

}
