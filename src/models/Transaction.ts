export interface Transaction {
    id: string;
    dateCreated: Date;
    type: string;
    category: string;
    isFavourite: boolean;
    isArchived: boolean;
    isProcessed: boolean;
    amount: number;
    currency: string;
    entity?: string;
    note?: string;
    subCategory?: string;
    ref?: string;
}