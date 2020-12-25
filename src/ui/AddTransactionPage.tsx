import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

import classNames from "classnames";

import { Transaction } from "../models/Transaction";
import { TransactionCategory } from "../models/TransactionCategory";
import { TransactionType } from "../models/TransactionType";
import { transactionAdd } from "../store/Transactions";

const AddTransactionPage = () => {
    const dispatch = useDispatch();

    let types = Object.keys(TransactionType).filter(x => !isNaN(Number(x)));
    let categories = Object.keys(TransactionCategory).filter(x => !isNaN(Number(x)));

    const { register, handleSubmit, errors } = useForm<Transaction>();

    const onSubmit = (transaction: Transaction) => {
        transaction.id = uuid();
        transaction.date = new Date();
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
                    ref={register({ valueAsNumber: true, required: "Type is required" })}>
                    <option value="" disabled>Select…</option>
                    {types.map(type => (
                        <option value={type} key={type}>{TransactionType[type as any]}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Category</label>
                <select name="category" defaultValue=""
                    className={classNames('form-control', { 'is-invalid': errors.category })}
                    ref={register({ valueAsNumber: true, required: "Category is required" })}>
                    <option value="" disabled>Select…</option>
                    {categories.map(category => (
                        <option value={category} key={category}>{TransactionCategory[category as any]}</option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
    );
}

export default AddTransactionPage;