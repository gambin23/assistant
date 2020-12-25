import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import transactionsReducer, { TransactionsState } from "./Transactions";

export default configureStore({
    reducer: {
        transactions: transactionsReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});

export interface AppState {
    transactions: TransactionsState
}