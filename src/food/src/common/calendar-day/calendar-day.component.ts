import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addDays, format, isToday, subDays } from 'date-fns';
import { DatePickerModalComponent, IconComponent, ModalModule } from '@assistant/common-ui';
import { FoodRecipeSelectComponent } from '../recipe-select/recipe-select.component';
import { FoodRecipeCardComponent } from '../recipe-card/recipe-card.component';
import { Recipe } from '../../models/recipes';
import { CalendarDay, MealType, meals } from '../../models/calendar';
import { RouterModule } from '@angular/router';
import { routeFoodRecipe } from '../../routes';

@Component({
    selector: 'food-calendar-day',
    standalone: true,
    templateUrl: './calendar-day.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        IconComponent,
        ModalModule,
        DatePickerModalComponent,
        FoodRecipeSelectComponent,
        FoodRecipeCardComponent
    ]
})
export class FoodCalendarDayComponent {

    @Input() date!: Date;
    @Input() meal!: MealType;
    @Input() day!: CalendarDay;
    @Input() recipes!: Recipe[];
    @Input() isBusy!: boolean;
    @Output() dateChange = new EventEmitter<Date>();
    @Output() mealChange = new EventEmitter<MealType>();
    @Output() recipeChange = new EventEmitter<string>();

    meals = meals;
    showRecipesModal = false;
    showDatePickerModal = false;

    routeFoodRecipe = routeFoodRecipe;
    getRecipe = (id: string) => this.recipes.find(x => x.id === id);
    getDay = () => isToday(this.date) ? 'Today' : format(this.date, 'dd MMM yyyy');
    onSelectMeal = (meal: MealType) => this.mealChange.emit(meal);
    onShowRecipes = () => this.showRecipesModal = true;
    onShowDatePicker = () => this.showDatePickerModal = true;
    onNextDay = () => this.dateChange.emit(addDays(this.date, 1));
    onPreviousDay = () => this.dateChange.emit(subDays(this.date, 1));
    onSelectedRecipe = (recipe: Recipe) => {
        this.recipeChange.emit(recipe.id);
        this.showRecipesModal = false;
    }
}
