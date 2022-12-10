import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isEqual } from 'lodash-es';
import { Observable } from 'rxjs';
import { Category } from '@assistant/food/models';
import { EditCardModule, IconComponent, ListModule, ModalModule, TagComponent, EditCardBaseComponent, SearchListPipe, SearchInputComponent, SearchMarkDirective } from '@assistant/common-ui';
import { CategoriesSelector } from '../../store/categories/categories.selector';

@Component({
    selector: 'food-recipe-edit-categories',
    standalone: true,
    templateUrl: './recipe-edit-categories.component.html',
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
export class FoodRecipeEditCategoriesComponent extends EditCardBaseComponent<string[]> implements OnInit {

    @Input() set categories(value: string[]) { this.initValue(value) };

    allCategories$!: Observable<Category[]>
    search = '';

    constructor(private categoriesSelector: CategoriesSelector) {
        super();
    }

    ngOnInit() {
        this.allCategories$ = this.categoriesSelector.categories$();
    }

    getCategory$ = (id: string) => this.categoriesSelector.category$(id);
    onSelect = (category: string) =>
        this.newValue = this.newValue.includes(category) ? this.newValue.filter(x => x != category) : [...this.newValue, category];
    isActive = (category: string) => this.newValue.includes(category);
    isSaveDisabled = () => isEqual(this.oldValue, this.newValue);
}
