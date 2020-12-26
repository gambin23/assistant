import { times, constant, uniqueId } from "lodash";

import { TransactionStatus } from "../models/TransactionStatus";
import { Transaction } from './../models/Transaction';

export const mockTransactions: Transaction[] = [{
    id: `transaction-${uniqueId()}`,
    dateCreated: new Date(),
    status: TransactionStatus.Unassigned,
    type: "income",
    category: "salary",
    amount: 50,
    currency: "EUR",
    entity: "GiG"
},
...times(15, constant<Transaction>({
    id: `transaction-${uniqueId()}`,
    dateCreated: new Date(),
    status: TransactionStatus.Unassigned,
    type: "income",
    category: "salary",
    amount: 150,
    currency: "EUR",
    entity: "GiG"
}))
]