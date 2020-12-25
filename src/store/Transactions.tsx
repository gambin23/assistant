import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { mockTransactions } from "../mock/transactions";
import { Transaction } from "../models/Transaction";
import { AppState } from "./Store";


export interface TransactionsState {
    data: Transaction[];
}

const initialState: TransactionsState = {
    data: mockTransactions
}


const slice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        transactionAdd: (state: TransactionsState, action: PayloadAction<Transaction>) => {
            state.data.unshift(action.payload)
        }
    }
})

export default slice.reducer;
export const { transactionAdd } = slice.actions;
export const getTransactions = (state: AppState) => state.transactions.data;