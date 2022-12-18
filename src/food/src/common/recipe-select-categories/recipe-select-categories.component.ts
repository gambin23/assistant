import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '@assistant/food/models';
import { EditCardModule, IconComponent, ListModule, ModalModule, TagComponent, SearchListPipe, SearchInputComponent, SearchMarkDirective } from '@assistant/common-ui';

@Component({
    selector: 'food-recipe-select-categories',
    standalone: true,
    templateUrl: './recipe-select-categories.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        EditCardModule,
        ModalModule,
        ListModule,
        TagComponent,
        IconComponent,
        SearchInputComponent,
        SearchListPipe,
        SearchMarkDirective
    ]
})
export class FoodRecipeSelectCategoriesComponent implements OnInit {

    @Input() categories: string[] = [];
    @Input() allCategories!: Category[];
    @Output() updated = new EventEmitter<string[]>();

    selected: string[] = [];
    showModal = false;
    search = '';

    ngOnInit() {
        this.selected = this.categories;
    }

    isActive = (item: string) => this.selected?.includes(item);
    onShow = () => this.showModal = true;
    onSelect = (item: string) => this.selected = this.isActive(item) ? this.selected.filter(x => x !== item) : [...this.selected, item];
    onClearAll = () => {
        this.showModal = false;
        this.search = '';
        this.selected = [];
        this.updated.emit(this.selected);
    }
    onSave = () => {
        this.showModal = false;
        this.search = '';
        this.updated.emit(this.selected);
    }
}
