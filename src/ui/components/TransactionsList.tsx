import { FunctionComponent } from "react";

import { Transaction } from "../../models/Transaction";
import MarkJS from "./common/MarkJS";
import TransactionCard from "./TransactionCard";

interface ITransactionsListProps {
    transactions: Transaction[];
    query?: string;
}

const TransactionsList: FunctionComponent<ITransactionsListProps> = ({ transactions, query }) => {
    return (
        <MarkJS value={query} options={{ exclude: [".avatar", ".caption"] }}>
            {transactions.map(transaction => (
                <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
        </MarkJS >
    );
}
export default TransactionsList;
