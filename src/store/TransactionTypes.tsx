import { createSlice, Dictionary } from "@reduxjs/toolkit";
import { mockTransactionTypes } from "../mock/transactionTypes";

import { AppState } from "./Store";


export interface TransactionTypesState {
    data: Dictionary<string>;
}

const initialState: TransactionTypesState = {
    data: mockTransactionTypes
}

const slice = createSlice({
    name: "transactionTypes",
    initialState,
    reducers: {
    }
})

export default slice.reducer;
export const getTransactionTypes = (state: AppState) => state.metadata.transactionTypes.data;