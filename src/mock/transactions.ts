import { TransactionCategory } from './../models/TransactionCategory';
import { TransactionStatus } from "../models/TransactionStatus";
import { Transaction } from './../models/Transaction';
import { TransactionType } from "../models/TransactionType";

export const mockTransactions: Transaction[] = [{
    id: "transaction-1",
    date: new Date(),
    status: TransactionStatus.Unassigned,
    type: TransactionType.Income,
    category: TransactionCategory.Salary,
    amount: 50,
    currency: "EUR",
    entity: "GiG"
},
{
    id: "transaction-2",
    date: new Date(),
    status: TransactionStatus.Unassigned,
    type: TransactionType.Expense,
    category: TransactionCategory.Shopping,
    amount: 150,
    currency: "EUR",
    entity: "GiG"
}]