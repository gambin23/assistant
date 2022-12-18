import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, SearchInputComponent } from '@assistant/common-ui';
import { Category } from '@assistant/food/models';
import { RecipeView } from '../recipe-card/recipe-card.model';
import { RecipesFilters } from '../../models/recipe';
import { FoodRecipeSelectCategoriesComponent } from "../recipe-select-categories/recipe-select-categories.component";

@Component({
    selector: 'recipes-filters',
    standalone: true,
    templateUrl: './recipes-filters.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent,
        SearchInputComponent,
        FoodRecipeSelectCategoriesComponent
    ]
})
export class RecipesFiltersComponent {
    @Input() filters: RecipesFilters = {};
    @Input() view: RecipeView = 'grid';
    @Input() showFavouriteArchived = false;
    @Input() categories!: Category[];

    @Output() filtered = new EventEmitter<Partial<RecipesFilters>>();
    @Output() viewChanged = new EventEmitter<RecipeView>();

    showCategoriesModal = false;
    selectedCategories: string[] = [];
    search = '';

    ngOnInit() {
        this.selectedCategories = this.filters.categories || [];
    }

    onChangeView = () => {
        this.view = this.view === 'grid' ? 'list' : 'grid';
        this.viewChanged.emit(this.view);
    }
    onSearch = (search: string) => this.setFilter({ search });
    onChangeSort = () => this.setFilter({ sort: this.filters.sort === 'asc' ? 'desc' : 'asc' });
    onShowAll = () => this.setFilter({ isFavourite: undefined, isArchived: undefined });
    onShowFavourites = () => this.setFilter({ isFavourite: true, isArchived: undefined });
    onShowArchived = () => this.setFilter({ isFavourite: undefined, isArchived: true });
    onUpdatedCategories = (categories: string[]) => this.setFilter({ categories });

    private setFilter = (filters: Partial<RecipesFilters>) => {
        this.filters = { ...this.filters, ...filters };
        this.filtered.emit(filters);
    }
}
