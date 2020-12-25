import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

import classNames from "classnames";

import { Transaction } from "../models/Transaction";
import { transactionAdd } from "../store/Transactions";
import { getCategories } from "../store/Categories";
import { getTransactionTypes } from "../store/TransactionTypes";

const AddTransactionPage = () => {
    const dispatch = useDispatch();

    let types = useSelector(getTransactionTypes);
    let categories = useSelector(getCategories);

    const { register, handleSubmit, errors, reset } = useForm<Transaction>();

    const onSubmit = (transaction: Transaction) => {
        reset({});
        transaction.id = uuid();
        transaction.dateCreated = new Date();
        transaction.currency = "EUR";
        dispatch(transactionAdd(transaction));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Add Transaction</h2>

            <div className="form-group">
                <input type="number" name="amount"
                    className={classNames('form-control', { 'is-invalid': errors.type })}
                    ref={register({ valueAsNumber: true, required: "Amount is required" })} />
            </div>

            <div className="form-group">
                <label>Entity</label>
                <input type="text" name="entity" placeholder="Enter entity"
                    className={classNames('form-control', { 'is-invalid': errors.entity })}
                    ref={register({ required: "Entity is required" })} />
            </div>

            <div className="form-group">
                <label>Description (Optional)</label>
                <input type="text" className="form-control" name="description" placeholder="Enter description" ref={register} />
            </div>

            <div className="form-group">
                <label>Type</label>
                <select name="type" defaultValue=""
                    className={classNames('form-control', { 'is-invalid': errors.type })}
                    ref={register({ required: "Type is required" })}>
                    <option value="" disabled>Select…</option>
                    {Object.keys(types).map(key => (
                        <option value={key} key={key}>{types[key]}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Category</label>
                <select name="category" defaultValue=""
                    className={classNames('form-control', { 'is-invalid': errors.category })}
                    ref={register({ required: "Category is required" })}>
                    <option value="" disabled>Select…</option>
                    {Object.keys(categories).map(key => (
                        <option value={key} key={key}>{categories[key]}</option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
    );
}

export default AddTransactionPage;