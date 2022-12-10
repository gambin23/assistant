import { guid } from '@assistant/common-sdk';
import { Recipe } from '@assistant/food/models';

export interface NewRecipeState {
    data: Recipe;
}

export const newRecipe = (): Recipe => {
    return {
        id: guid(),
        name: '',
        description: '',
        dateCreated: new Date(),
        categories: [],
        ingredients: [],
        method: []
    }
}
