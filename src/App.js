import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/slices/counterSlice";

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
        dispatch(incrementByAmount(5))
    }

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
