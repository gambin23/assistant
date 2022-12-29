import { Dictionary } from '../common';
import { SubscriptionType } from '../subscriptions/subscriptions.model';

export interface User {
    id: string;
    name?: string;
    email?: string;
    image?: string;
    apps?: Dictionary<string>;
    registeredDate?: Date;
    lastLoginDate?: Date;
    subscriptionType?: SubscriptionType;
    subscriptionStartDate?: Date;
    subscriptionEndDate?: Date;
}

export interface UserState {
    data: User;
    isBusy: boolean;
}
