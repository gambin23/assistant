import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firestoreConfig } from './config';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(firestoreConfig),
        AngularFirestoreModule
    ]
})
export class FirestoreModule { }
