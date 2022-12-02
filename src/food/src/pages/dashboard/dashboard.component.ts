import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardHeaderComponent } from '@assistant/common-ui';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipes';
import { Calendar, CalendarDay, MealType } from '../../models/calendar';
import { CalendarSelector } from '../../store/calendar/calendar.selector';
import { RecipesSelector } from '../../store/recipes/recipes.selector';
import { FoodCalendarDayComponent } from '../../common/calendar-day/calendar-day.component';
import { FoodCalendarWeekComponent } from '../../common/calendar-week/calendar-week.component';
import { CalendarActions } from '../../store/calendar/calendar.actions';

@Component({
    selector: 'dashboard-page',
    standalone: true,
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        DashboardHeaderComponent,
        FoodCalendarDayComponent,
        FoodCalendarWeekComponent
    ]
})
export class DashboardPageComponent implements OnInit {

    date = new Date();
    meal: MealType = 'lunch';
    day$!: Observable<CalendarDay>;
    week$!: Observable<Calendar>;
    recipes$!: Observable<Recipe[]>;
    isBusy$!: Observable<boolean>;

    constructor(
        private recipesSelector: RecipesSelector,
        private calendarSelector: CalendarSelector,
        private calendarActions: CalendarActions
    ) { }

    ngOnInit(): void {
        this.recipes$ = this.recipesSelector.recipes$();
        this.day$ = this.calendarSelector.day$(this.date);
        this.week$ = this.calendarSelector.week$(this.date);
        this.isBusy$ = this.calendarSelector.isBusy$();
    }

    onDateChanged = (date: Date) => this.day$ = this.calendarSelector.day$(date);
    onRecipeChanged = (id: string) => this.calendarActions.updateDay(this.date, { [this.meal]: id });
}
