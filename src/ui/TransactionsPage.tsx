import React, { FunctionComponent, useState, ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PlusSquareFill } from "react-bootstrap-icons";
import { debounce } from "lodash";
import classNames from "classnames";

import { getTransactions } from "../store/Transactions";
import { searchTransactions } from "../services/Transactions";
import TransactionsList from "./components/TransactionsList";
import NoResult from "./components/common/NoResult";

enum TransactionType {
    All,
    Favourites,
    Archived
}

const TransactionsPage: FunctionComponent = () => {
    const allTransactions = useSelector(getTransactions);
    const [transactions, setTransactions] = useState(allTransactions);
    const [query, setQuery] = useState("");
    const [transactionType, setTransactionType] = useState(TransactionType.All);
    const searchDebounce = debounce(query => setQuery(query), 500);

    useEffect(() => {
        switch (transactionType) {
            case TransactionType.All:
                setTransactions(searchTransactions(allTransactions, query));
                break;
            case TransactionType.Favourites:
                setTransactions(searchTransactions(allTransactions, query, true));
                break;
            case TransactionType.Archived:
                setTransactions(searchTransactions(allTransactions, query, null, true));
                break;
        }
    }, [query, allTransactions, transactionType]);

    function onSearch(e: ChangeEvent<HTMLInputElement>) {
        searchDebounce(e.currentTarget.value);
    }

    function onTransactionType(type: TransactionType) {
        setTransactionType(type);
    }

    return (
        <>
            <h2>Transactions <Link to="new"><PlusSquareFill /></Link></h2>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item" onClick={() => onTransactionType(TransactionType.All)}>
                    <span className={classNames("nav-link", { active: transactionType === TransactionType.All })}>All</span>
                </li>
                <li className="nav-item" onClick={() => onTransactionType(TransactionType.Favourites)}>
                    <span className={classNames("nav-link", { active: transactionType === TransactionType.Favourites })}>Favourites</span>
                </li>
                <li className="nav-item" onClick={() => onTransactionType(TransactionType.Archived)}>
                    <span className={classNames("nav-link", { active: transactionType === TransactionType.Archived })}>Archived</span>
                </li>
            </ul>
            <input type="search" className="form-control" placeholder="Search" onChange={onSearch} />
            <TransactionsList transactions={transactions} query={query} />
            {transactions.length === 0 && <NoResult value={query} />}
        </>
    );
}

export default TransactionsPage;
