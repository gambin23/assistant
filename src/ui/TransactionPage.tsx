import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { getTransaction } from "../store/Transactions";
import TransactionCard from "./components/TransactionCard";

interface IParams {
    id: string;
}

const TransactionPage: FunctionComponent<RouteComponentProps<IParams>> = ({ match }) => {
    const transaction = useSelector(getTransaction(match.params.id));

    return (
        <>
            { transaction ? <TransactionCard transaction={transaction} /> : <div>Not found</div>}
        </>
    );
}
export default TransactionPage;
