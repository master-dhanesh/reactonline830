import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [],
};

export const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        loadimages: (state, action) => {
            state.images = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { loadimages } = imageSlice.actions;

export const asyncloadimages = () => (dispatch, getState) => {
    console.log(getState());
    fetch("https://picsum.photos/v2/list")
        .then((images) => images.json())
        .then((images) => {
            dispatch(loadimages(images));
        })
        .catch((error) => console.log(error));
};

export default imageSlice.reducer;
