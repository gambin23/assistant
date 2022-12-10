import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Dictionary } from '@assistant/common-sdk';
import { map, take } from 'rxjs';

export const getList = <T>(store: AngularFirestore, list: string) => store.collection<T>(list).valueChanges().pipe(take(1));
export const getUserList = <T>(store: AngularFirestore, userId: string, list: string) => store.collection('users').doc(userId).collection<T>(list).valueChanges().pipe(take(1));
export const getUserListFromDictionary = <T>(store: AngularFirestore, userId: string, collection: string) =>
    store.collection('users').doc(userId).collection<T>(collection).get().pipe(
        map(x => x.docs.map(x => { return { ...x.data(), id: x.id } as T }))
    );
export const getUserDictionary = <T>(store: AngularFirestore, userId: string, collection: string) =>
    store.collection('users').doc(userId).collection<T>(collection).get().pipe(map(x => {
        const dictionary: Dictionary<T> = {};
        x.docs.map(x => dictionary[x.id] = x.data())
        return dictionary;
    }));
