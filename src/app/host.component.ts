import { NavigationEnd, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppsActions, AppsSelector, ThemeService } from '@assistant/common-sdk';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'root',
    templateUrl: './host.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostComponent implements OnInit {

    constructor(
        private themeService: ThemeService,
        private router: Router,
        private appsActions: AppsActions,
        private appsSelector: AppsSelector
    ) { }

    private activeApp = '';

    ngOnInit(): void {
        this.themeService.register();

        combineLatest([this.router.events, this.appsSelector.appNames$()]).subscribe(([event, appNames]) => {
            if (event instanceof NavigationEnd) {
                const app = event.url.split('/')[1];
                if (appNames.includes(app) && this.activeApp !== app) {
                    this.appsActions.switchApp(app);
                    this.activeApp = app;
                }
            }
        });
    }

}
