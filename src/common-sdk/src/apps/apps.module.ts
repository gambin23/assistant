import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppsSelector } from './apps.selector';
import { AppsActions } from './apps.actions';
import { App } from './apps.model';
import { AppsService } from './apps.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        AppsActions,
        AppsSelector
    ],
    bootstrap: []
})
export class AppsModule {

    constructor(private appsService: AppsService) {
        this.appsService.load();
    }

    static register(apps: App[]): ModuleWithProviders<AppsModule> {
        return {
            ngModule: AppsModule,
            providers: [
                AppsService,
                {
                    provide: 'apps',
                    useValue: apps
                }
            ]
        }
    }
}
