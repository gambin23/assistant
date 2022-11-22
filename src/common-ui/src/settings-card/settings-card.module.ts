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
        SettingsCardDescriptionComponent
    ],
    declarations: [],
    exports: [
        SettingsCardComponent,
        SettingsCardIconComponent,
        SettingsCardTitleComponent,
        SettingsCardDescriptionComponent
    ],
    providers: [],
    bootstrap: []
})
export class SettingsCardModule { }
