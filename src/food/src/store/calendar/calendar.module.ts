import { NgModule } from '@angular/core';
import { CalendarActions } from './calendar.actions';
import { CalendarSelector } from './calendar.selector';
import { CalendarService } from './calendar.service';

@NgModule({
    providers: [
        CalendarActions,
        CalendarSelector,
        CalendarService
    ]
})
export class FoodCalendarModule { }
