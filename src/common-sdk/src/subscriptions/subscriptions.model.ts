import { Dictionary } from '@assistant/common-sdk';

export type SubscriptionType = 'free' | 'bronze' | 'silver' | 'gold' | 'admin';

export interface Subscription {
    type: SubscriptionType;
    name: string;
    description: string;
    color?: string;
    price: number;
    benefits: Dictionary<string[]>;
}

export interface SubscriptionLength {
    name: string;
    value: number;
    accumulator: number;
}

export const subscriptionLength: SubscriptionLength[] = [{
    name: '1 Month',
    value: 1,
    accumulator: 1
},
{
    name: '3 Months',
    value: 3,
    accumulator: 0.8335
},
{
    name: '1 year',
    value: 12,
    accumulator: 0.75
}];

export const subscriptionSkeleton: Subscription = {
    type: 'free',
    name: 'Free',
    description: 'The standard free tier.',
    price: 0,
    benefits: {
        'food': ['Add <b>25</b> recipes to your account', 'Pick one random recipe for every meal']
    }
}

export const subscriptionsSkeleton: Subscription[] = [
    subscriptionSkeleton,
    {
        type: 'bronze',
        name: 'Bronze',
        description: 'The bronze tier.',
        color: '#CD7F32',
        price: 2,
        benefits: {
            'food': ['Add <b>50</b> recipes to your account', 'Auto add ingredients to Shopping cart']
        }
    },
    {
        type: 'silver',
        name: 'Silver',
        description: 'The silver tier.',
        color: '#C0C0C0',
        price: 5,
        benefits: {
            'food': ['Add <b>100</b> recipes to your account', 'Create group calendar to share with your friends']
        }
    },
    {
        type: 'gold',
        name: 'Gold',
        description: 'The gold tier.',
        color: '#FFD700',
        price: 8,
        benefits: {
            'food': ['Add <b>250</b> recipes to your account', 'Picking random recipes is unlimited']
        }
    }
]
