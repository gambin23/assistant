import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent, ImageDirective, ImageModalComponent, ImageUploadModalComponent } from '@assistant/common-ui';
import { Recipe } from '@assistant/food/models';
import { getCookTime } from '../../models/cook-time';

@Component({
    selector: 'food-recipe-edit-header',
    standalone: true,
    templateUrl: './recipe-edit-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormsModule,
        IconComponent,
        ImageDirective,
        ImageModalComponent,
        ImageUploadModalComponent
    ]
})
export class FoodRecipeEditHeaderComponent {

    @Input() set recipe(value: Recipe) {
        this.oldRecipe = value;
        this.newName = value.name;
        this.newDescription = value.description;
    }
    @Input() hideImage = false;
    @Input() readonly = false;
    @Output() updated = new EventEmitter<Partial<Recipe>>();

    isEdit = false;
    oldRecipe!: Recipe;
    newName!: string;
    newDescription!: string;

    showImageModal = false;
    showEditImageModal = false;

    getCookTime = getCookTime;
    onEdit = () => this.isEdit = true;
    onCancel = () => {
        this.newName = this.oldRecipe.name;
        this.newDescription = this.oldRecipe.description;
        this.isEdit = false;
    }
    onSave = () => {
        this.updated.emit({
            name: this.newName,
            description: this.newDescription
        });
        this.isEdit = false;
    }

    onShowImageModal = () => this.showImageModal = true;
    onShowEditImageModal = (e: Event) => {
        e.stopPropagation();
        this.showEditImageModal = true;
    }
    onUploadedImage = (image: string) => this.updated.emit({ image });
}
