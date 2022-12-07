import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isEqual } from 'lodash-es';
import { EditCardModule, IconComponent, ListModule, ModalModule, TagComponent } from '@assistant/common-ui';
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
        IconComponent
    ]
})
export class FoodRecipeEditCategoriesComponent {

    @Input() set categories(value: string[]) {
        this.oldCategories = this.newCategories = value;
    };
    @Input() readonly = false;
    @Output() updated = new EventEmitter<string[]>();

    allCategories = categories;
    oldCategories!: string[];
    newCategories!: string[];
    showModal = false;

    getCategory = getCategory;
    onEdit = () => this.showModal = true;
    onSelect = (category: string) =>
        this.newCategories = this.newCategories.includes(category) ? this.newCategories.filter(x => x != category) : [...this.newCategories, category];
    onSave = () => {
        this.updated.emit(this.newCategories);
        this.showModal = false;
    }
    onClose = () => this.showModal = false;
    isActive = (category: string) => this.newCategories.includes(category);
    isSaveDisabled = () => isEqual(this.oldCategories, this.newCategories);
}
