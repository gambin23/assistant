import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '@assistant/common-ui';
import { Recipe } from '../../models/recipes';
import { getCookTime } from '../../models/cook-time';

@Component({
    selector: 'food-recipe-edit-header',
    standalone: true,
    templateUrl: './recipe-edit-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormsModule,
        IconComponent
    ]
})
export class FoodRecipeEditHeaderComponent implements OnInit {

    @Input() recipe!: Recipe;
    @Input() readonly = false;
    @Output() updated = new EventEmitter<Partial<Recipe>>();

    isEdit = false;
    newName!: string;
    newDescription!: string;
    ngOnInit() {
        this.newName = this.recipe.name;
        this.newDescription = this.recipe.description;
    }
    getCookTime = getCookTime;
    onEdit = () => this.isEdit = true;
    onCancel = () => {
        this.newName = this.recipe.name;
        this.newDescription = this.recipe.description;
        this.isEdit = false;
    }
    onSave = () => {
        this.updated.emit({
            name: this.newName,
            description: this.newDescription
        });
        this.isEdit = false;
    }
}
