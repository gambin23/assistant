import { Dictionary } from '@assistant/common-sdk';

export type SubscriptionType = 'free' | 'bronze' | 'silver' | 'gold';

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
    accumulator: number;
}

export const subscriptionLength: SubscriptionLength[] = [{
    name: '1 Month',
    accumulator: 1
},
{
    name: '3 Months',
    accumulator: 2.5
},
{
    name: '1 year',
    accumulator: 10
}];

export const subscriptionSkeleton: Subscription = {
    type: 'free',
    name: 'Free',
    description: 'The standard free tier.',
    price: 0,
    benefits: {
        'food': ['Add <b>50</b> recipes to your recipes', 'Pick one random recipe for every meal']
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
            'food': ['Add <b>100</b> recipes to your recipes', 'Auto add ingredients to Shopping cart']
        }
    },
    {
        type: 'silver',
        name: 'Silver',
        description: 'The silver tier.',
        color: '#C0C0C0',
        price: 5,
        benefits: {
            'food': ['Add <b>200</b> recipes to your recipes', 'Create group calendar to share with your friends']
        }
    },
    {
        type: 'gold',
        name: 'Gold',
        description: 'The gold tier.',
        color: '#FFD700',
        price: 8,
        benefits: {
            'food': ['Add <b>unlimited</b> recipes to your recipes', 'Picking random recipes is unlimited']
        }
    }
]
