import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { DashboardHeaderComponent, PageComponent } from '@assistant/common-ui';
import { Calendar, MealType, Recipe } from '@assistant/food/models';
import { CalendarActions, CalendarSelector, RecipesSelector, calendarDate } from '@assistant/food/store';
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

        this.queryParamsInit({
            date: calendarDate(new Date()),
            meal: 'lunch'
        });
        this.queryParamsSubscribe(() => {
            this.day$ = this.calendarSelector.day$(this.queryParams.date!);
            this.week$ = this.calendarSelector.week$(this.queryParams.date!);
        });
    }

    onDateChange = (date: Date) => this.queryParamsSet({ date: calendarDate(date) });
    onMealChange = (meal: MealType) => this.queryParamsSet({ meal });
    onRecipeChange = (id: string) => this.calendarActions.patch(calendarDate(this.queryParams.date!), { [this.queryParams.meal!]: id });
    newDate = (date: string) => new Date(date);
}
