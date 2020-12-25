import { Action, combineReducers, configureStore, getDefaultMiddleware, MiddlewareArray } from "@reduxjs/toolkit";

import transactionsReducer, { TransactionsState } from "./Transactions";
import categoriesReducer, { CategoriesState } from "./Categories";
import transactionTypesReducer, { TransactionTypesState } from "./TransactionTypes";

export default configureStore<AppState, Action<any>, MiddlewareArray<any>>({
    reducer: {
        transactions: transactionsReducer,
        metadata: combineReducers({
            transactionTypes: transactionTypesReducer,
            categories: categoriesReducer
        })
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});

export interface AppState {
    transactions: TransactionsState;
    metadata: {
        categories: CategoriesState;
        transactionTypes: TransactionTypesState;
    }
}
