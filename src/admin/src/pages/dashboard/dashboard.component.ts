import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { App, AppsSelector, Dictionary } from '@assistant/common-sdk';
import { SettingsCardModule, UserHeaderComponent } from '@assistant/common-ui';

@Component({
    selector: 'admin-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        SettingsCardModule,
        UserHeaderComponent
    ]
})
export default class DashboardComponent implements OnInit {

    apps$!: Observable<Dictionary<App>>;

    constructor(private appsSelector: AppsSelector) { }

    ngOnInit() {
        this.apps$ = this.appsSelector.apps$();
    }
}
