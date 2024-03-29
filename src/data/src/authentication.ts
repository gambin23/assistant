import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { combineLatest, filter, from, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Authentication {

    constructor(private auth: AngularFireAuth) { }

    login = () => { this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()); }
    logout$ = () => from(this.auth.signOut());
    isAuthenticated$ = this.auth.authState.pipe(map(user => !!user));
    isNewUser$ = this.auth.credential.pipe(map(x => !!x?.additionalUserInfo?.isNewUser));
    user$ = this.auth.authState.pipe(filter(user => !!user));
}
