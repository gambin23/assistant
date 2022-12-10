import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppStore } from '../store/store';

const getUser = createSelector((state: AppStore) => state.user, x => x);

@Injectable({ providedIn: 'root' })
export class UserSelector {

    constructor(private store: Store<AppStore>) { }

    user$ = () => this.store.select(getUser);
    userId$ = () => this.user$().pipe(map(x => x.id));
    userName$ = () => this.user$().pipe(map(x => x.name));
}
