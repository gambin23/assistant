import { TransactionStatus } from './TransactionStatus';

export interface Transaction {
    id: string;
    date: Date;
    type: string;
    category: string;
    status: TransactionStatus;
    amount: number;
    currency: string;
    entity?: string;
    description?: string;
    subCategory?: string;
    ref?: string;
}