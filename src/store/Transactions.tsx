import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "./Store";
import { mockTransactions } from "../mock/transactions";
import { Transaction } from "../models/Transaction";


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
        addTransaction: (state: TransactionsState, action: PayloadAction<Transaction>) => {
            state.data.unshift(action.payload)
        },
        favouriteTransaction: (state: TransactionsState, action: PayloadAction<string>) => {
            state.data.find(x => x.id === action.payload).isFavourite = true;
        },
        unfavouriteTransaction: (state: TransactionsState, action: PayloadAction<string>) => {
            state.data.find(x => x.id === action.payload).isFavourite = false;
        },
        archiveTransaction: (state: TransactionsState, action: PayloadAction<string>) => {
            state.data.find(x => x.id === action.payload).isArchived = true;
        },
        unarchiveTransaction: (state: TransactionsState, action: PayloadAction<string>) => {
            state.data.find(x => x.id === action.payload).isArchived = false;
        },
    }
})

export default slice.reducer;
export const { addTransaction, favouriteTransaction, unfavouriteTransaction, archiveTransaction, unarchiveTransaction } = slice.actions;
export const getTransactions = (state: AppState) => state.transactions.data;
export const getTransaction = (id: string) => (state: AppState) => state.transactions.data.find(x => x.id === id);