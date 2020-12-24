import { TransactionStatus } from './TransactionStatus';
import { TransactionCategory } from './TransactionCategory';
import { TransactionType } from './TransactionType';

export interface Transaction {
    id: string;
    date: Date;
    type: TransactionType;
    category: TransactionCategory;
    status: TransactionStatus;
    amount: number;
    currency: string;
    entity?: string;
    description?: string;
    subCategory?: string;
    ref?: string;
}