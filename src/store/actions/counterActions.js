export const incrementaction = (state) => {
    state.value += 1;
};

export const decrementaction = (state) => {
    state.value -= 1;
};

export const incrementByAmountaction = (state, action) => {
    console.log(action);
    state.value += action.payload;
};
