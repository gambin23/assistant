import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PlusSquareFill } from "react-bootstrap-icons";

import { getTransactions } from "../store/Transactions";
import TransactionsList from "./common/TransactionsList";

const TransactionsPage = () => {

    const transactions = useSelector(getTransactions);

    useEffect(() => { }, []);

    return (
        <>
            <h2>Transactions <Link to="new"><PlusSquareFill /></Link></h2>
            {<TransactionsList transactions={transactions} />}
        </>
    );
}

export default TransactionsPage;
