import { createReducer, on } from '@ngrx/store';
import { setState } from '@assistant/common-sdk';
import { CalendarState } from './calendar.model';
import { calendarLoad, calendarLoadSuccess, calendarLoadError, calendarUpdateDay } from './calendar.actions';

const initialState: CalendarState = {
    data: {},
    isBusy: false,
    isError: false
};

export const calendarReducer = createReducer(
    initialState,
    on(calendarLoad, (state) => setState(state, {
        isBusy: true,
        isError: false
    })),
    on(calendarLoadSuccess, (state, action) => setState(state, {
        data: action.calendar,
        isBusy: false,
        isError: false
    })),
    on(calendarLoadError, (state) => setState(state, {
        isBusy: false,
        isError: true
    })),
    on(calendarUpdateDay, (state, action) => setState(state, {
        data: { ...state.data, [action.id]: { ...state.data[action.id], ...action.day } }
    }))
);
