import Currency from "./utils/Currency";
import { Transaction } from "../../models/Transaction";
import { TransactionType } from "../../models/TransactionType";

interface ITransactionProps {
    transactions: Transaction[];
}

const TransactionsList = (props: ITransactionProps) => {
    return (
        <>
            {props.transactions.map(x => (
                <div key={x.id} className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-9">
                                {x.entity}
                            </div>
                            <div className="col-sm-3">
                                {x.type === TransactionType.Income ? "+" : "-"}
                                <Currency value={x.amount} currency={x.currency} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
export default TransactionsList;
