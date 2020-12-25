import React from "react";
import { Link } from "react-router-dom";

import { Transaction } from "../../models/Transaction";
import TransactionCard from "./TransactionCard";

interface ITransactionsListProps {
    transactions: Transaction[];
}

const TransactionsList = ({ transactions }: ITransactionsListProps) => {
    return (
        <>
            {transactions.map(transaction => (
                <Link key={transaction.id} to={`/transaction/${transaction.id}`}>
                    <TransactionCard transaction={transaction} />
                </Link>
            ))}
        </>
    );
}
export default TransactionsList;
