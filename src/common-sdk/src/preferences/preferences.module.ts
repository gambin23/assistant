import { NgModule } from '@angular/core';
import { PreferencesSelector } from './preferences.selector';
import { PreferencesActions } from './preferences.actions';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        PreferencesActions,
        PreferencesSelector
    ],
    bootstrap: []
})
export class PreferencesStoreModule { }
