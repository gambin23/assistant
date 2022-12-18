import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent, SearchInputComponent } from '@assistant/common-ui';
import { RecipeView } from '../recipe-card/recipe-card.model';
import { RecipesFilters } from '../../models/recipe';

@Component({
    selector: 'recipes-filters',
    standalone: true,
    templateUrl: './recipes-filters.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormsModule,
        IconComponent,
        SearchInputComponent
    ]
})
export class RecipesFiltersComponent {
    @Input() filters: RecipesFilters = {
        search: '',
        categories: [],
        sort: 'asc'
    };
    @Input() view: RecipeView = 'grid';
    @Input() showFavouriteArchived = false;

    @Output() filtered = new EventEmitter<Partial<RecipesFilters>>();
    @Output() viewChanged = new EventEmitter<RecipeView>();

    onChangeView = () => {
        this.view = this.view === 'grid' ? 'list' : 'grid';
        this.viewChanged.emit(this.view);
    }
    onSearch = (search: string) => this.setFilter({ search });
    onChangeSort = () => this.setFilter({ sort: this.filters.sort === 'asc' ? 'desc' : 'asc' });
    showAll = () => this.setFilter({ isFavourite: undefined, isArchived: undefined });
    showFavourites = () => this.setFilter({ isFavourite: true, isArchived: undefined });
    showArchived = () => this.setFilter({ isFavourite: undefined, isArchived: true });

    private setFilter = (filters: Partial<RecipesFilters>) => {
        this.filters = { ...this.filters, ...filters };
        this.filtered.emit(filters);
    }
}
