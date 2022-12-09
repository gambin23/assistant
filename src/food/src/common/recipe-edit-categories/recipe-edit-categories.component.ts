import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isEqual } from 'lodash-es';
import { EditCardModule, IconComponent, ListModule, ModalModule, TagComponent, EditCardBaseComponent, SearchListPipe, SearchInputComponent } from '@assistant/common-ui';
import { categories, getCategory } from '../../models/category';

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
        SearchListPipe
    ]
})
export class FoodRecipeEditCategoriesComponent extends EditCardBaseComponent<string[]> {

    @Input() set categories(value: string[]) { this.initValue(value) };

    allCategories = categories;
    search = '';

    getCategory = getCategory;
    onSelect = (category: string) =>
        this.newValue = this.newValue.includes(category) ? this.newValue.filter(x => x != category) : [...this.newValue, category];
    isActive = (category: string) => this.newValue.includes(category);
    isSaveDisabled = () => isEqual(this.oldValue, this.newValue);
}
