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
