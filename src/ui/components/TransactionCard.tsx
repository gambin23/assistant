import { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BookmarkDashFill, BookmarkPlusFill, EyeFill, EyeSlashFill, ThreeDotsVertical } from "react-bootstrap-icons";
import classNames from "classnames";

import { Transaction } from "../../models/Transaction";
import Currency from "./common/Currency";
import Time from "./common/Time";
import Avatar from "./common/Avatar";
import { getCategory } from "../../store/Categories";
import { archiveTransaction, favouriteTransaction, unarchiveTransaction, unfavouriteTransaction } from "../../store/Transactions";

interface ITransactionCardProps {
    transaction: Transaction;
}

const TransactionCard: FunctionComponent<ITransactionCardProps> = ({ transaction }) => {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const category = useSelector(getCategory(transaction.category));

    function toggleFavourite() {
        transaction.isFavourite ? dispatch(unfavouriteTransaction(transaction.id)) : dispatch(favouriteTransaction(transaction.id));
        setShowMenu(false);
    }

    function toggleArchive() {
        transaction.isArchived ? dispatch(unarchiveTransaction(transaction.id)) : dispatch(archiveTransaction(transaction.id));
        setShowMenu(false);
    }

    return (
        <div className={classNames("card", { active: showMenu, pinned: transaction.isFavourite })}>
            <div className="d-flex justify-content-start">
                <div className="card-sidebar">
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <ThreeDotsVertical />
                    </button>
                    {showMenu &&
                        <ul>
                            <li onClick={toggleFavourite}>
                                {transaction.isFavourite ? <BookmarkDashFill size={24} /> : <BookmarkPlusFill size={24} />}
                            </li>
                            <li onClick={toggleArchive}>
                                {transaction.isArchived ? <EyeFill size={24} /> : <EyeSlashFill size={24} />}
                            </li>
                        </ul>
                    }
                </div>
                <Link className="card-body" key={transaction.id} to={`/transaction/${transaction.id}`}>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-start align-items-center">
                            <Avatar value={transaction.entity} />
                            <div className="ml-2">
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
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    );
}
export default TransactionCard;
