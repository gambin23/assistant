import { Inject, Injectable } from '@angular/core';
import { App, AppsActions } from '@assistant/common-sdk';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppsService {

    private apps: App[];

    constructor(@Inject('apps') apps: App[], private appsActions: AppsActions) {
        this.apps = apps;
    }

    load = () => this.appsActions.loadApps(this.apps);
}
