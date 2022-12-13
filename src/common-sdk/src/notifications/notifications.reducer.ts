import { createReducer, on } from '@ngrx/store';
import { setState } from '../store/store';
import { notificationAddSuccess, notificationsLoad, notificationsLoadError, notificationsLoadSuccess, notificationPatchSuccess } from './notifications.actions';
import { NotificationsState } from './notifications.model';

const initialState: NotificationsState = {
    data: [],
    isBusy: false,
    isError: false
};

export const notificationsReducer = createReducer(
    initialState,
    on(notificationsLoad, (state) => setState(state, {
        isBusy: true
    })),
    on(notificationsLoadSuccess, (state, action) => setState(state, {
        data: action.notifications,
        isBusy: false
    })),
    on(notificationsLoadError, (state) => setState(state, {
        isBusy: false,
        isError: true
    })),
    on(notificationAddSuccess, (state, action) => setState(state, {
        data: [action.notification, ...state.data]
    })),
    on(notificationPatchSuccess, (state, action) => {
        const index = state.data.findIndex(x => x.id === action.id);
        return setState(state, {
            data: Object.assign([], state.data, { [index]: { ...state.data[index], ...action.notification } })
        })
    })
);
