import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { last, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StorageData {

    constructor(private storage: AngularFireStorage) { }

    uploadImage$ = (path: string, file: File) =>
        this.storage.upload(path, file, { cacheControl: 'public,max-age=31536000' }).snapshotChanges().pipe(
            last(),
            switchMap(() => this.storage.storage.ref(path).getDownloadURL())
        );
}
