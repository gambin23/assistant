import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { from, map, take } from 'rxjs';
import { Dictionary } from '@assistant/common-sdk';

export const getEntity = <T>(store: AngularFirestore, list: string, id: string) =>
    store.collection<T>(list).doc(id).valueChanges().pipe(take(1));

export const addEntity = <T>(store: AngularFirestore, list: string, id: string, entity: T) =>
    from(store.collection(list).doc(id).set(<DocumentData>entity));

export const patchEntity = <T>(store: AngularFirestore, list: string, id: string, entity: Partial<T>) =>
    from(store.collection(list).doc(id).set(entity, { merge: true }));


export const getList = <T>(store: AngularFirestore, list: string) =>
    store.collection<T>(list).valueChanges().pipe(take(1));

export const addUserEntity = <T>(store: AngularFirestore, userId: string, list: string, id: string, entity: T) =>
    from(store.collection('data').doc(userId).collection(list).doc(id).set(<DocumentData>entity));

export const patchUserEntity = <T>(store: AngularFirestore, userId: string, list: string, id: string, entity: Partial<T>) =>
    from(store.collection('data').doc(userId).collection(list).doc(id).set(entity, { merge: true }));

export const getUserList = <T>(store: AngularFirestore, userId: string, list: string) =>
    store.collection('data').doc(userId).collection<T>(list).valueChanges().pipe(take(1));

export const getUserListFromDictionary = <T>(store: AngularFirestore, userId: string, list: string) =>
    store.collection('data').doc(userId).collection<T>(list).get().pipe(
        map(x => x.docs.map(x => { return { ...x.data(), id: x.id } as T }))
    );

export const getUserDictionary = <T>(store: AngularFirestore, userId: string, list: string) =>
    store.collection('data').doc(userId).collection<T>(list).get().pipe(map(x => {
        const dictionary: Dictionary<T> = {};
        x.docs.map(x => dictionary[x.id] = x.data())
        return dictionary;
    }));
