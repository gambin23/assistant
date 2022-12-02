import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { addDays, format, isSameDay, isToday, subDays } from 'date-fns';
import { IconComponent } from '@assistant/common-ui';
import { Calendar, MealType } from '../../models/calendar';
import { Recipe } from '../../models/recipes';

@Component({
    selector: 'food-calendar-week',
    standalone: true,
    templateUrl: './calendar-week.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class FoodCalendarWeekComponent {

    @Input() date!: Date;
    @Input() meal!: MealType;
    @Input() week!: Calendar;
    @Input() recipes!: Recipe[];
    @Input() isBusy!: boolean;
    @Output() dateChange = new EventEmitter<Date>();
    @Output() changed = new EventEmitter<Date>();

    onNextPage = () => this.dateChange.emit(addDays(this.date, 7));
    onPreviousPage = () => this.dateChange.emit(subDays(this.date, 7));
    onSelectDay = (day: string) => this.dateChange.emit(new Date(day));
    getRecipe = (id: string): Recipe | undefined => this.recipes.find(x => x.id === id);
    getDay = (day: string) => isToday(new Date(day)) ? 'Today' : format(new Date(day), 'iii, dd MMM');
    isActiveDay = (day: string) => isSameDay(this.date, new Date(day));
}
