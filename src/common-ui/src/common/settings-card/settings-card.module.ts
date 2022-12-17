import { SettingsCardActionsComponent } from './settings-card-actions.component';
import { NgModule } from '@angular/core';
import { SettingsCardDescriptionComponent } from './settings-card-description.component';
import { SettingsCardTitleComponent } from './settings-card-title.component';
import { SettingsCardIconComponent } from './settings-card-icon.component';
import { SettingsCardComponent } from './settings-card.component';

@NgModule({
    imports: [
        SettingsCardComponent,
        SettingsCardIconComponent,
        SettingsCardTitleComponent,
        SettingsCardDescriptionComponent,
        SettingsCardActionsComponent
    ],
    exports: [
        SettingsCardComponent,
        SettingsCardIconComponent,
        SettingsCardTitleComponent,
        SettingsCardDescriptionComponent,
        SettingsCardActionsComponent
    ]
})
export class SettingsCardModule { }
