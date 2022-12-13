export interface Notification {
    id: string;
    app: string;
    date: Date;
    message: string;
    link?: string;
    read?: boolean;
}

export interface NotificationsState {
    data: Notification[];
    isBusy: boolean;
    isError: boolean;
}

export const notificationSkeleton: Notification = {
    id: '1',
    app: 'food',
    date: new Date(),
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    read: true
}

export const notificationsSkeleton: Notification[] = [notificationSkeleton, notificationSkeleton, notificationSkeleton, notificationSkeleton, notificationSkeleton]
