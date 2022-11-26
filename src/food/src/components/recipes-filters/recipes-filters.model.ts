import { SortOrder } from '@assistant/common-sdk';

export interface RecipesFilters {
    search: string;
    categories: string[];
    sort: SortOrder;
    isFavourite?: boolean;
    isArchived?: boolean;
}
