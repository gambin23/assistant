import { times, constant } from "lodash";
import { v4 as uuid } from "uuid";
import { Transaction } from './../models/Transaction';

export const mockTransactions: Transaction[] = [{
    id: uuid(),
    dateCreated: new Date(),
    type: "income",
    category: "salary",
    amount: 50,
    currency: "EUR",
    entity: "GiG",
    isFavourite: true,
    isArchived: false,
    isProcessed: true
},
...times(15, () => {
    return {
        id: uuid(),
        dateCreated: new Date(),
        type: "income",
        category: "salary",
        amount: 150,
        currency: "EUR",
        entity: "GiG",
        isFavourite: false,
        isArchived: false,
        isProcessed: true
    }
})
]