import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { DataModule } from '@assistant/data';
import { AppsModule, AppStore, reducers, effects } from '@assistant/common-sdk';
import { AlertModule, BrowserTitleModule, NavigationComponent } from '@assistant/common-ui';
import { ADMIN_APP } from '@assistant/admin/name';
import { FOOD_APP } from '@assistant/food/name';
import { FINANCE_APP } from '@assistant/finance/name';
import { HostComponent } from './host.component';
import { RoutesModule } from './host.routes';

export const localStorageSyncReducer = (reducer: ActionReducer<any>) => localStorageSync({
    keys: ['preferences', 'apps', { food: ['newRecipe'] }],
    rehydrate: true
})(reducer);

const metaReducers: Array<MetaReducer<AppStore, any>> = [localStorageSyncReducer];

@NgModule({
    bootstrap: [HostComponent],
    declarations: [HostComponent],
    imports: [
        BrowserModule,
        RoutesModule,
        BrowserTitleModule.withPrefix('Assistant |'),
        AppsModule.register([
            ADMIN_APP,
            FOOD_APP,
            FINANCE_APP
        ]),
        DataModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument(),
        NavigationComponent,
        AlertModule
    ]
})
export class HostModule {
}
