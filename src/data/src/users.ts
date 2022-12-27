import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '@assistant/common-sdk';
import { addEntity, getEntity } from './common';

@Injectable({ providedIn: 'root' })
export class UsersData {

    constructor(private store: AngularFirestore) { }

    get$ = (id: string) => getEntity<User>(this.store, 'users', id);
    add$ = (user: User) => addEntity(this.store, 'users', user.id, user);
}
