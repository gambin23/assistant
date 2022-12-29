import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '@assistant/food/models';
import { SearchActions, SearchSelector } from '@assistant/food/store';
import { FoodRecipeCardComponent, RecipeView } from '@assistant/food/components';

@Component({
    selector: 'admin-food-page',
    standalone: true,
    templateUrl: './food.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FoodRecipeCardComponent
    ]
})
export default class FoodComponent implements OnInit {

    recipes$!: Observable<Recipe[]>;
    isBusy$!: Observable<boolean>;
    view: RecipeView = 'grid';

    constructor(
        private searchActions: SearchActions,
        private searchSelector: SearchSelector
    ) { }

    ngOnInit() {
        this.searchActions.search({
            sort: 'asc',
            name: ''
        });

        this.recipes$ = this.searchSelector.recipes$();
        this.isBusy$ = this.searchSelector.isBusy$();

    }
}
