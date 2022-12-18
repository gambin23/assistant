import { Dictionary, SortOrder } from '@assistant/common-sdk';

export type Recipes = Dictionary<Recipe>;
export interface Recipe {
    id: string;
    name: string;
    description: string;
    userId?: string;
    dateCreated: Date;
    cookTime?: number;
    categories: string[];
    ingredients: string[];
    method: string[];
    image?: string;
    isFavourite?: boolean;
    isArchived?: boolean;
}

export interface RecipesFilters {
    search?: string;
    categories?: string[];
    sort?: SortOrder;
    isFavourite?: boolean;
    isArchived?: boolean;
}

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

export const recipesSkeleton: Recipe[] = [
    recipeSkeleton,
    recipeSkeleton,
    recipeSkeleton,
    recipeSkeleton,
    recipeSkeleton,
    recipeSkeleton
]

