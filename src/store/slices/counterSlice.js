import { createSlice } from "@reduxjs/toolkit";
import {
    decrementaction,
    incrementaction,
    incrementByAmountaction,
} from "../actions/counterActions";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: incrementaction,
        decrement: decrementaction,
        incrementByAmount: incrementByAmountaction,
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
