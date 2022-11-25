import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppsService, AppsModule, AppStore, reducers, ThemeService } from '@assistant/common-sdk';
import { NavigationComponent } from '@assistant/common-ui';
import { FOOD_APP } from '@assistant/food/name';
import { FINANCE_APP } from '@assistant/finance/name';
import { HostComponent } from './host.component';
import { RoutesModule } from './routes.module';

export const localStorageSyncReducer = (reducer: ActionReducer<any>) => localStorageSync({
    keys: ['user', 'preferences'],
    rehydrate: true
})(reducer);

const metaReducers: Array<MetaReducer<AppStore, any>> = [localStorageSyncReducer];

@NgModule({
    declarations: [HostComponent],
    imports: [
        BrowserModule,
        RoutesModule,
        AppsModule.register([
            FOOD_APP,
            FINANCE_APP
        ]),
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument(),
        NavigationComponent
    ],
    providers: [
        ThemeService,
        AppsService
    ],
    bootstrap: [HostComponent]
})
export class HostModule { }