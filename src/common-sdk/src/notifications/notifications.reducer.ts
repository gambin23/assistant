import { createReducer, on } from '@ngrx/store';
import { setState } from '../store/store';
import { notificationsLoad, notificationsLoadError, notificationsLoadSuccess } from './notifications.actions';
import { NotificationsState } from './notifications.model';

const initialState: NotificationsState = {
    data: [],
    isBusy: false,
    isError: false
};

export const notificationsReducer = createReducer(
    initialState,
    on(notificationsLoad, (state) => setState(state, { isBusy: true })),
    on(notificationsLoadSuccess, (state, action) => setState(state, { data: action.notifications, isBusy: false })),
    on(notificationsLoadError, (state) => setState(state, { isBusy: false, isError: true }))
);
