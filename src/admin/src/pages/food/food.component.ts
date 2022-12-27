import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '@assistant/food/models';

@Component({
    selector: 'admin-food',
    standalone: true,
    templateUrl: './food.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule
    ]
})
export default class FoodComponent implements OnInit {

    recipes$!: Observable<Recipe[]>;

    constructor() { }

    ngOnInit() {
    }
}
