import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { IconComponent, ModalService } from '@assistant/common-ui';
import { RecipesSelector } from '../../store/recipes/recipes.selector';
import { FoodRecipeSelectComponent } from '../recipe-select/recipe-select.component';
import { FoodRecipeCardComponent } from '../recipe-card/recipe-card.component';
import { Recipe } from '../../models/recipes';
import { CalendarDay, MealType, meals } from '../../models/calendar';
import { CalendarActions } from '../../store/calendar/calendar.actions';

@Component({
    selector: 'food-calendar-day',
    standalone: true,
    templateUrl: './calendar-day.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent,
        FoodRecipeSelectComponent,
        FoodRecipeCardComponent
    ],
    providers: []
})
export class FoodCalendarDayComponent {

    @Input() date!: string;
    @Input() meal: MealType = 'lunch';
    @Input() day!: CalendarDay;
    @Input() recipes!: Recipe[];
    @Input() isBusy!: boolean;

    meals = meals;

    @ViewChild('recipesModal') recipesModal!: TemplateRef<string>;

    constructor(
        private modalService: ModalService,
        private recipesSelector: RecipesSelector,
        private calendarActions: CalendarActions
    ) { }

    onSelectMeal(meal: MealType) {
        this.meal = meal;
    }

    onSelectRecipe() {
        this.modalService.show({ title: 'Select Recipe', template: this.recipesModal });
    }

    onSelectedRecipe(recipe: Recipe) {
        this.calendarActions.updateDay(this.date, { [this.meal]: recipe.id })
        this.modalService.hide();
    }

    getRecipe$(id: string) {
        return this.recipesSelector.recipe$(id);
    }
}
