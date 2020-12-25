import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { getTransaction } from "../store/Transactions";
import TransactionCard from "./components/TransactionCard";

interface IParams {
    id: string;
}

const TransactionPage = (props: RouteComponentProps<IParams>) => {
    const transaction = useSelector(getTransaction(props.match.params.id));

    return (
        <TransactionCard transaction={transaction} />
    );
}
export default TransactionPage;
