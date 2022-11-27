import { Dictionary } from '@assistant/common-sdk';

export interface Recipe {
    id: string;
    name: string;
    description: string;
    userId?: string;
    dateCreated: Date;
    cookTime: number;
    categories: string[];
    ingredients: string[];
    method: string[];
    image?: string;
}


export const recipes: Recipe[] = [
    {
        id: '1',
        name: 'Penne with Pesto & Basil',
        description: 'Pasta with Pesto and Parmiggiano',
        userId: 'user-id',
        dateCreated: new Date(),
        cookTime: 30,
        categories: ['pasta'],
        ingredients: ['Pesto', 'Pasta Penne 100mg', 'Parmiggiano Cheese'],
        method: ['Boil water in a pan', 'Put all pasta in water and stir', 'Add 2tbs of Pesto and 1/2cup parmiggiano', 'Stir all ingredients together'],
        image: 'https://firebasestorage.googleapis.com/v0/b/athena-5c3e6.appspot.com/o/recipes%2FsUk3cDpl2T7dgR97BxU8.jpg?alt=media&token=9109542c-50a8-48e4-af03-c6995c5e7ad1'
    },
    {
        id: '2',
        name: 'Tuna Salad',
        description: 'A tuna salad with eggs, beans and fresh leave for the whole family',
        userId: 'user-id',
        dateCreated: new Date(),
        cookTime: 20,
        categories: ['salad', 'fish'],
        ingredients: ['Tuna 240mg', 'Borlotti beans', '2 boiled eggs', 'Salad mix'],
        method: ['Boil 2 eggs and peal them', 'Cut some fresh vegetables and mix together', 'Open beans and tuna and mix them together'],
        image: 'https://firebasestorage.googleapis.com/v0/b/athena-5c3e6.appspot.com/o/recipes%2FzDikwc06W8LSGhsZfPYh.jpg?alt=media&token=e1487ddc-182f-48a7-ab01-e8628f1b0f54'
    }
]

export const recipeSkeleton: Recipe = {
    id: '1',
    name: 'Penne with Pesto & Basil',
    description: 'Pasta with Pesto and Parmiggiano',
    userId: 'user-id',
    dateCreated: new Date(),
    cookTime: 30,
    categories: ['pasta'],
    ingredients: ['Pesto', 'Pasta Penne 100mg', 'Parmiggiano Cheese'],
    method: ['Boil water in a pan', 'Put all pasta in water and stir', 'Add 2tbs of Pesto and 1/2cup parmiggiano', 'Stir all ingredients together'],
    image: 'https://firebasestorage.googleapis.com/v0/b/athena-5c3e6.appspot.com/o/recipes%2FsUk3cDpl2T7dgR97BxU8.jpg?alt=media&token=9109542c-50a8-48e4-af03-c6995c5e7ad1'
}

export const recipesDictionary: Dictionary<Recipe> = {
    '1': recipeSkeleton,
    '2': {
        id: '2',
        name: 'Tuna Salad',
        description: 'A tuna salad with eggs, beans and fresh leave for the whole family',
        userId: 'user-id',
        dateCreated: new Date(),
        cookTime: 20,
        categories: ['salad', 'fish'],
        ingredients: ['Tuna 240mg', 'Borlotti beans', '2 boiled eggs', 'Salad mix'],
        method: ['Boil 2 eggs and peal them', 'Cut some fresh vegetables and mix together', 'Open beans and tuna and mix them together'],
        image: 'https://firebasestorage.googleapis.com/v0/b/athena-5c3e6.appspot.com/o/recipes%2FzDikwc06W8LSGhsZfPYh.jpg?alt=media&token=e1487ddc-182f-48a7-ab01-e8628f1b0f54'
    }
};
