import { recipeSkeleton } from './recipe';

export interface Calendar {
    id: string;
    breakfast?: string;
    lunch?: string;
    dinner?: string;
}

export const calendarDaySkeleton: Calendar = {
    id: '2000-01-01',
    breakfast: recipeSkeleton.id,
    lunch: recipeSkeleton.id,
    dinner: recipeSkeleton.id
}

export const calendarSkeleton: Calendar[] = [
    { ...calendarDaySkeleton, id: '2000-01-01' },
    { ...calendarDaySkeleton, id: '2000-01-02' },
    { ...calendarDaySkeleton, id: '2000-01-03' },
    { ...calendarDaySkeleton, id: '2000-01-04' },
    { ...calendarDaySkeleton, id: '2000-01-05' },
    { ...calendarDaySkeleton, id: '2000-01-06' },
    { ...calendarDaySkeleton, id: '2000-01-07' }
]
