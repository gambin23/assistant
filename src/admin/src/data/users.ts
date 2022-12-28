import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { first, map } from 'rxjs';
import { User } from '@assistant/common-sdk';
import { getEntity } from '@assistant/data';

@Injectable({ providedIn: 'root' })
export class UsersData {

    constructor(private store: AngularFirestore) { }

    search$ = (search?: string) => this.store.collection<User>('users', data => {
        if (!search)
            search = '';

        return data
            .where('email', '>=', search)
            .where('email', '<=', search + 'z')
    }).valueChanges().pipe(
        first(),
        map(x => x.map(x => {
            return {
                ...x,
                lastLoginDate: (<any>x.lastLoginDate).toDate(),
                registeredDate: (<any>x.lastLoginDate).toDate()
            } as User
        }))
    );

    get$ = (id: string) => getEntity<User>(this.store, 'users', id);
}
