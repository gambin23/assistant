import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getUserListFromDictionary } from '@assistant/data';
import { Calendar } from '@assistant/food/models';

@Injectable({ providedIn: 'root' })
export class CalendarData {

    constructor(private store: AngularFirestore) { }

    all$ = (userId: string) => getUserListFromDictionary<Calendar>(this.store, userId, 'foodCalendar');

}
