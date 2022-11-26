import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from '@assistant/common-ui';
import { RecipesFilters } from './recipes-filters.model';
import { debounceTime, Subscription } from 'rxjs';
import { RecipeView } from '../../common/recipe-card/recipe-card.model';

@Component({
    selector: 'recipes-filters',
    standalone: true,
    templateUrl: './recipes-filters.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IconComponent
    ]
})
export class RecipesFiltersComponent implements OnInit, OnDestroy {
    @Input() filters: RecipesFilters = {
        search: '',
        categories: [],
        sort: 'asc'
    };
    @Input() view: RecipeView = 'grid';
    @Input() showFavouriteArchived = false;

    @Output() filtered = new EventEmitter<RecipesFilters>();
    @Output() viewChanged = new EventEmitter<RecipeView>();

    search = new FormControl<string>('', { nonNullable: true });
    private subscription = new Subscription();

    ngOnInit() {
        this.subscription = this.search.valueChanges.pipe(
            debounceTime(500)
        ).subscribe(search =>
            this.setFilter({ search })
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onChangeSort() {
        this.setFilter({ sort: this.filters.sort === 'asc' ? 'desc' : 'asc' });
    }

    onChangeView() {
        this.view = this.view === 'grid' ? 'list' : 'grid';
        this.viewChanged.emit(this.view);
    }

    showAll() {
        this.setFilter({ isFavourite: false, isArchived: false });
    }

    showFavourites() {
        this.setFilter({ isFavourite: true, isArchived: false });
    }

    showArchived() {
        this.setFilter({ isFavourite: false, isArchived: true });
    }

    private setFilter(filters: Partial<RecipesFilters>) {
        this.filters = { ...this.filters, ...filters };
        this.filtered.emit(this.filters);
    }
}
