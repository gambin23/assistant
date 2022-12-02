import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addDays, format, isToday, subDays } from 'date-fns';
import { DatePickerModalComponent, IconComponent, ModalService } from '@assistant/common-ui';
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
    @Output() changed = new EventEmitter<string>();

    @ViewChild('recipesModal') recipesModal!: TemplateRef<string>;

    meals = meals;
    routeFoodRecipe = routeFoodRecipe;

    constructor(private modalService: ModalService) { }

    onSelectMeal = (meal: MealType) => this.mealChange.emit(meal);
    onSelectRecipe = () => this.modalService.show({ title: 'Select Recipe', template: this.recipesModal });
    onNextDay = () => this.dateChange.emit(addDays(this.date, 1));
    onPreviousDay = () => this.dateChange.emit(subDays(this.date, 1));
    getRecipe = (id: string) => this.recipes.find(x => x.id === id);
    getDay = () => isToday(this.date) ? 'Today' : format(this.date, 'dd MMM yyyy');
    onSelectedRecipe = (recipe: Recipe) => {
        this.changed.emit(recipe.id);
        this.modalService.hide();
    }
}
