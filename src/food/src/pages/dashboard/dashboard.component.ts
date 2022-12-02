import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardHeaderComponent } from '@assistant/common-ui';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipes';
import { CalendarDay, MealType } from '../../models/calendar';
import { calendarDate } from '../../store/calendar/calendar.functions';
import { CalendarSelector } from '../../store/calendar/calendar.selector';
import { RecipesSelector } from '../../store/recipes/recipes.selector';
import { FoodCalendarDayComponent } from '../../common/calendar-day/calendar-day.component';
import { FoodCalendarWeekComponent } from '../../common/calendar-week/calendar-week.component';

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

    date = calendarDate(new Date());
    meal: MealType = 'lunch';
    day$!: Observable<CalendarDay>;
    recipes$!: Observable<Recipe[]>;
    isBusy$!: Observable<boolean>;

    constructor(
        private recipesSelector: RecipesSelector,
        private calendarSelector: CalendarSelector
    ) { }

    ngOnInit(): void {
        this.recipes$ = this.recipesSelector.recipes$();
        this.day$ = this.calendarSelector.day$(this.date);
        this.isBusy$ = this.calendarSelector.isBusy$();
    }
}
