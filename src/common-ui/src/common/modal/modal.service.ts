import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalConfig } from './modal.config';

@Injectable({ providedIn: 'root' })
export class ModalService {

    configSubject$ = new BehaviorSubject<ModalConfig>({});

    get config$(): Observable<ModalConfig> {
        return this.configSubject$;
    }

    show(config: ModalConfig) {
        this.configSubject$.next({ ...this.configSubject$.value, ...config, show: true });
    }

    hide() {
        this.configSubject$.next({ ...this.configSubject$.value, show: false });
    }
}
