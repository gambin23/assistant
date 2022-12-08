import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Calendar, calendarSkeleton } from '../../models/calendar';

@Injectable({ providedIn: 'root' })
export class CalendarService {

    getAll$(): Observable<Calendar> {
        return of(calendarSkeleton);
    }
}
