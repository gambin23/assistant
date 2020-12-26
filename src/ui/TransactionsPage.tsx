import { useEffect, KeyboardEvent, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PlusSquareFill } from "react-bootstrap-icons";
import { debounce } from "lodash";

import { getTransactions } from "../store/Transactions";
import TransactionsList from "./components/TransactionsList";

const TransactionsPage = () => {
    const allTransactions = useSelector(getTransactions);
    const [transactions, setTransactions] = useState(allTransactions);
    const [query, setQuery] = useState("");

    const search = debounce(query => {
        setQuery(query);
        setTransactions(allTransactions.filter(x => x.entity.toLowerCase().includes(query.toLowerCase())));
    }, 500);

    useEffect(() => { }, []);

    function onSearch(e: ChangeEvent<HTMLInputElement>) {
        search(e.currentTarget.value);
    }

    return (
        <>
            <h2>Transactions <Link to="new"><PlusSquareFill /></Link></h2>
            <input type="search" className="form-control" placeholder="Search" onChange={onSearch} />
            <TransactionsList transactions={transactions} />
            {transactions.length === 0 &&
                <div className="text-center p-5">
                    <img src="images/no-results.svg" height="300" />
                    <h3>No Results found</h3>
                    <p>No results found for {query}</p>
                </div>
            }
        </>
    );
}

export default TransactionsPage;
