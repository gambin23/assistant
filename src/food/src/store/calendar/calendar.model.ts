import { Calendar } from '../../models/calendar';

export interface CalendarState {
    data: Calendar;
    isBusy: boolean;
    isError: boolean;
}


