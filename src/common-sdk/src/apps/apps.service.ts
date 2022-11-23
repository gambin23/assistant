import { Inject, Injectable } from '@angular/core';
import { App } from '@assistant/common-sdk';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppsService {

    private apps$ = new BehaviorSubject<App[]>([]);

    constructor(@Inject('apps') apps: App[]) {
        this.apps$.next(apps);
    }

    getApps$(): Observable<App[]> {
        return this.apps$;
    }
}
