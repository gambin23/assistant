import { format } from 'date-fns';

export const calendarDate = (date: string | Date) => date instanceof Date ? format(date, 'yyyy-MM-dd') : date;
