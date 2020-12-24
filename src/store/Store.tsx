import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer, { TransactionsState } from "./Transactions";

export default configureStore({
    reducer: {
        transactions: transactionsReducer
    }
});

export interface AppState {
    transactions: TransactionsState
}