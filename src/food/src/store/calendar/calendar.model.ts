import { Calendar } from '@assistant/food/models';

export interface CalendarState {
    data: Calendar[];
    isBusy: boolean;
    isError: boolean;
}


