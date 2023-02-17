import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
} from "./store/slices/counterSlice";
import { asyncloadimages } from "./store/slices/imageSlice";

const App = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counterReducer);

    const incrementbyone = () => {
        dispatch(increment());
    };

    const decrementbyone = () => {
        dispatch(decrement());
    };

    const changevalue = () => {
        dispatch(incrementByAmount(5));
    };

    useEffect(() => {
        dispatch(asyncloadimages());
    }, []);

    return (
        <div className="container mt-5">
            <h1>{value}</h1>
            <button className="btn btn-primary" onClick={incrementbyone}>
                Increase by 1
            </button>
            <button className="btn btn-danger" onClick={decrementbyone}>
                Decrement by 1
            </button>
            <button className="btn btn-danger" onClick={changevalue}>
                change value
            </button>
        </div>
    );
};

export default App;
