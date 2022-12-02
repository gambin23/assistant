import { Dictionary } from '@assistant/common-sdk';
import { recipeSkeleton } from './recipes';

export interface Calendar extends Dictionary<CalendarDay> { }

export interface CalendarDay {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
}

export type MealType = 'breakfast' | 'lunch' | 'dinner';
export interface Meal {
    id: MealType,
    name: string
}

export const meals: Meal[] = [
    {
        id: 'breakfast',
        name: 'Breakfast'
    },
    {
        id: 'lunch',
        name: 'Lunch'
    },
    {
        id: 'dinner',
        name: 'Dinner'
    }
]

export const calendarDaySkeleton: CalendarDay = {
    breakfast: recipeSkeleton.id,
    lunch: recipeSkeleton.id,
    dinner: recipeSkeleton.id
}

export const calendarSkeleton: Calendar = {
    "2022-12-01": calendarDaySkeleton,
    "2022-12-02": calendarDaySkeleton,
    "2022-12-03": calendarDaySkeleton,
    "2022-12-04": { ...calendarDaySkeleton, lunch: '2' },
    "2022-12-05": calendarDaySkeleton,
    "2022-12-06": calendarDaySkeleton,
    "2022-12-07": calendarDaySkeleton
}
