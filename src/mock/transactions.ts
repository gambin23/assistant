import { TransactionStatus } from "../models/TransactionStatus";
import { Transaction } from './../models/Transaction';

export const mockTransactions: Transaction[] = [{
    id: "transaction-1",
    date: new Date(),
    status: TransactionStatus.Unassigned,
    type: "income",
    category: "salary",
    amount: 50,
    currency: "EUR",
    entity: "GiG"
},
{
    id: "transaction-2",
    date: new Date(),
    status: TransactionStatus.Unassigned,
    type: "income",
    category: "salary",
    amount: 150,
    currency: "EUR",
    entity: "GiG"
}]