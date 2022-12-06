import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class FoodRecipeEditCategoriesComponent implements OnInit {

    @Input() categories!: string[];
    @Input() readonly = false;
    @Output() updated = new EventEmitter<string[]>();

    allCategories = categories;
    newCategories: string[] = [];
    showModal = false;

    ngOnInit() {
        this.newCategories = this.categories;
    }

    getCategory = getCategory;
    onEdit = () => this.showModal = true;
    onSelect = (category: string) =>
        this.newCategories = this.newCategories.includes(category) ? this.newCategories.filter(x => x != category) : [...this.newCategories, category];
    onSave = () => {
        this.updated.emit(this.newCategories);
        this.showModal = false;
    }
    onCancel = () => this.showModal = false;
    isActive = (category: string) => this.newCategories.includes(category);
    isSaveDisabled = () => isEqual(this.categories, this.newCategories);
}
