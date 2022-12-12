import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from '../store/store';
import { Alert } from './alert.model';


const selectAlert = createSelector((state: AppStore) => state.alert, x => x.data);

@Injectable({ providedIn: 'root' })
export class AlertSelector {

    constructor(private store: Store<AppStore>) { }

    alert$(): Observable<Alert | undefined> {
        return this.store.select(selectAlert);
    }
}
