import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppsService, AppsModule, AppStore, reducers } from '@assistant/common-sdk';
import { NavigationComponent } from '@assistant/common-ui';
import { FOOD_APP } from '@assistant/food/name';
import { FINANCE_APP } from '@assistant/finance/name';
import { HostComponent } from './host.component';
import { RoutesModule } from './host.routes';

export const localStorageSyncReducer = (reducer: ActionReducer<any>) => localStorageSync({
    keys: ['user', 'preferences', { apps: ['active'] }, { food: ['newRecipe'] }],
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
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument(),
        NavigationComponent
    ],
    providers: [
        AppsService
    ],
    bootstrap: [HostComponent]
})
export class HostModule { }
