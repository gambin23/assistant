import { Transaction } from "../models/Transaction";
import { compact } from "lodash";

export function searchTransactions(transactions: Transaction[], query?: string, isFavourite?: boolean, isArchived = false) {
    const queryPredicate = query ? (x: Transaction) => x.entity.toLowerCase().includes(query.toLowerCase()) : null;
    const isFavouritePredicate = isFavourite ? (x: Transaction) => x.isFavourite === isFavourite : null;
    const isArchivedPredicate = (x: Transaction) => x.isArchived === isArchived;
    const predicates = compact([queryPredicate, isFavouritePredicate, isArchivedPredicate]);
    return transactions.filter(transaction => predicates.every(x => x(transaction)));
}
