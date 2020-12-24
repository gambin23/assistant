import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getTransactions } from "../store/Transactions";
import TransactionsList from "./common/TransactionsList";

const TransactionsPage = () => {

    const transactions = useSelector(getTransactions);

    useEffect(() => { }, []);

    return (
        <>
            <h2>Transactions</h2>
            {<TransactionsList transactions={transactions}/>}
        </>
    );
}

export default TransactionsPage;
