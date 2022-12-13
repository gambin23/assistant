import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, of } from 'rxjs';
import { Notification } from '@assistant/common-sdk';
import { addUserEntity, getUserList, patchUserEntity } from './common';

@Injectable({ providedIn: 'root' })
export class NotificationsData {

    constructor(private store: AngularFirestore) { }

    all$ = (userId: string) => getUserList<Notification>(this.store, userId, 'notifications').pipe(map(x => x.map(x => { return { ...x, date: (<any>x.date).toDate() } })));
    add$ = (userId: string, notification: Notification) => addUserEntity(this.store, userId, 'notifications', notification.id, notification);
    patch$ = (userId: string, id: string, notification: Partial<Notification>) => patchUserEntity(this.store, userId, 'notifications', id, notification);
}
