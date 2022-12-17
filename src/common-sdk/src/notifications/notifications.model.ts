import { routeFoodRecipe } from './../../../food/src/routes';

export interface NotificationBase {
    app: string;
    message: string;
    link?: string;
}

export interface Notification extends NotificationBase {
    id: string;
    date: Date;
    read?: boolean;
}

export interface NotificationsState {
    data: Notification[];
    isBusy: boolean;
    isError: boolean;
}

export type NotificationView = 'all' | 'unread';

export interface NotificationFilters {
    view?: NotificationView;
}

export const notificationSkeleton: Notification = {
    id: '1',
    app: 'food',
    date: new Date(),
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    read: true
}

export const notificationsSkeleton: Notification[] = [notificationSkeleton, notificationSkeleton, notificationSkeleton, notificationSkeleton, notificationSkeleton];
