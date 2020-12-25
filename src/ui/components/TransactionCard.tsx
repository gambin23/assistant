import React from "react";

import Currency from "./common/Currency";
import { Transaction } from "../../models/Transaction";
import Time from "./common/Time";

interface ITransactionCardProps {
    transaction: Transaction;
}

const TransactionCard = ({ transaction }: ITransactionCardProps) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-9">
                        <div>{transaction.entity}</div>
                        <div className="caption">
                            <Time value={transaction.dateCreated} day="2-digit" weekday="short" month="short" />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        {transaction.type === "income" ? "+" : "-"}
                        <Currency value={transaction.amount} currency={transaction.currency} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TransactionCard;
