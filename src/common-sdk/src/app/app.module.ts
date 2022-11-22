import { NgModule } from '@angular/core';
import { AppSelector } from './app.selector';
import { AppActions } from './app.actions';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        AppActions,
        AppSelector
    ],
    bootstrap: []
})
export class AppStoreModule { }
