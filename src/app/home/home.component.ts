import { SettingsCardModule } from '../../common-ui/src/common/settings-card/settings-card.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IconComponent, UserHeaderComponent } from '@assistant/common-ui';
import { App, AppsSelector, Dictionary } from '@assistant/common-sdk';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        UserHeaderComponent,
        IconComponent,
        SettingsCardModule
    ]
})
export class HomeComponent implements OnInit {

    apps$!: Observable<Dictionary<App>>;

    constructor(private appsSelector: AppsSelector) {}

    ngOnInit(): void {
        this.apps$ = this.appsSelector.apps$();
    }
}
