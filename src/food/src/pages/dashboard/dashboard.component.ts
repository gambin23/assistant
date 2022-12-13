import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Calendar, MealType, Recipe } from '@assistant/food/models';
import { DashboardHeaderComponent, PageComponent } from '@assistant/common-ui';
import { CalendarSelector } from '../../store/calendar/calendar.selector';
import { RecipesSelector } from '../../store/recipes/recipes.selector';
import { CalendarActions } from '../../store/calendar/calendar.actions';
import { calendarDate } from '../../store/calendar/calendar.functions';
import { FoodCalendarDayComponent } from '../../common/calendar-day/calendar-day.component';
import { FoodCalendarWeekComponent } from '../../common/calendar-week/calendar-week.component';
import { DashboardQueryParams } from './dashboard.model';

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
export default class DashboardPageComponent extends PageComponent<DashboardQueryParams> implements OnInit {

    date = new Date();
    meal: MealType = 'lunch';
    day$!: Observable<Calendar>;
    week$!: Observable<Calendar[]>;
    recipes$!: Observable<Recipe[]>;
    isBusy$!: Observable<boolean>;

    constructor(
        router: Router,
        route: ActivatedRoute,
        title: Title,
        changeRef: ChangeDetectorRef,
        private recipesSelector: RecipesSelector,
        private calendarSelector: CalendarSelector,
        private calendarActions: CalendarActions
    ) {
        super(router, route, title, changeRef);
    }

    ngOnInit(): void {
        this.recipes$ = this.recipesSelector.recipes$();
        this.isBusy$ = this.calendarSelector.isBusy$();
        super.subscribeParamsChange(() => {
            this.day$ = this.calendarSelector.day$(this.date);
            this.week$ = this.calendarSelector.week$(this.date);
        });
    }

    onDateChange = (date: Date) => this.setQueryParam({ date: calendarDate(date) });
    onMealChange = (meal: MealType) => this.setQueryParam({ meal });
    onRecipeChange = (id: string) => this.calendarActions.patch(calendarDate(this.date), { [this.meal]: id });
}
