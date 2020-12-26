import { TransactionStatus } from './TransactionStatus';

export interface Transaction {
    id: string;
    dateCreated: Date;
    type: string;
    category: string;
    status: TransactionStatus;
    amount: number;
    currency: string;
    entity?: string;
    note?: string;
    subCategory?: string;
    ref?: string;
}