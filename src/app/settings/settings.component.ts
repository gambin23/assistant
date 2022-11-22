import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PreferencesActions, PreferencesSelector, PreferencesStoreModule, Theme } from '@assistant/common-sdk';
import { IconComponent, SettingsCardModule, UserHeaderComponent } from '@assistant/common-ui';

@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        PreferencesStoreModule,
        IconComponent,
        UserHeaderComponent,
        SettingsCardModule
    ]
})
export class SettingsComponent implements OnInit {

    theme$: Observable<Theme | undefined> | undefined;

    constructor(
        private preferencesActions: PreferencesActions,
        private preferencesSelector: PreferencesSelector
    ) { }

    ngOnInit(): void {
        this.theme$ = this.preferencesSelector.theme$();
    }

    toggleDarkTheme() {
        this.preferencesActions.toggleDarkTheme();
    }
}
