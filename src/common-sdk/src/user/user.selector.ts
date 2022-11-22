import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppStore } from '../store/store';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class UserSelector {

    constructor(private store: Store<AppStore>) { }

    user$(): Observable<User> {
        return this.store.select(state => state.user);
    }

    isAuthenticated$(): Observable<boolean> {
        return this.userId$().pipe(map(x => !!x));
    }

    userId$(): Observable<string | undefined> {
        return this.user$().pipe(map(x => x.id));
    }

    userName$(): Observable<string | undefined> {
        return this.user$().pipe(map(x => x.name));
    }
}
