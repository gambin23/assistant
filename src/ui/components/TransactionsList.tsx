import React from "react";

import { Transaction } from "../../models/Transaction";
import TransactionCard from "./TransactionCard";

interface ITransactionsListProps {
    transactions: Transaction[];
}

const TransactionsList = ({ transactions }: ITransactionsListProps) => {
    return (
        <>
            {transactions.map(transaction => (
                <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
        </>
    );
}
export default TransactionsList;
