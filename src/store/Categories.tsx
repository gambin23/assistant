import { createSlice, Dictionary } from "@reduxjs/toolkit";
import { orderBy } from "lodash";

import { AppState } from "./Store";
import { mockCategories } from "../mock/categories";


export interface CategoriesState {
    data: Dictionary<string>;
}

const initialState: CategoriesState = {
    data: Object.assign({}, ...orderBy(Object.keys(mockCategories)).map((x) => ({ [x]: mockCategories[x] })))
}

const slice = createSlice({
    name: "categories",
    initialState,
    reducers: {
    }
})

export default slice.reducer;
export const { } = slice.actions;
export const getCategories = (state: AppState) => state.metadata.categories.data;