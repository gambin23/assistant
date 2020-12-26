import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThreeDotsVertical } from "react-bootstrap-icons";

import { Transaction } from "../../models/Transaction";
import Currency from "./common/Currency";
import Time from "./common/Time";
import Avatar from "./common/Avatar";
import { getCategory } from "../../store/Categories";

interface ITransactionCardProps {
    transaction: Transaction;
}

const TransactionCard = ({ transaction }: ITransactionCardProps) => {
    var category = useSelector(getCategory(transaction.category));

    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-start align-items-center">
                        <Avatar value={transaction.entity} />
                        <div className="ml-2" >
                            <div>
                                <b>{transaction.entity}</b> / <i>{category}</i>
                            </div>
                            <div className="caption">
                                <Time value={transaction.dateCreated} day="2-digit" weekday="short" month="short" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        {transaction.type === "income" ? "+" : "-"}
                        <Currency value={transaction.amount} currency={transaction.currency} />
                        <ThreeDotsVertical className="ml-2"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TransactionCard;
