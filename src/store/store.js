import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import imageReducer from "./slices/imageSlice";

export const store = configureStore({
    reducer: {
        counterReducer,
        imageReducer,
    },
});
