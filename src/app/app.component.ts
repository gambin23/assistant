import { NavigationEnd, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppActions, AppSelector, ThemeService } from '@assistant/common-sdk';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    constructor(
        private themeService: ThemeService,
        private router: Router,
        private appActions: AppActions,
        private appSelector: AppSelector
    ) { }

    private activeApp = '';

    ngOnInit(): void {
        this.themeService.register();

        combineLatest([this.router.events, this.appSelector.appNames$()]).subscribe(([event, appNames]) => {
            if (event instanceof NavigationEnd) {
                const app = event.url.split('/')[1];
                if (appNames.includes(app) && this.activeApp !== app) {
                    this.appActions.switchApp(app);
                    this.activeApp = app;
                }
            }
        });
    }

}
