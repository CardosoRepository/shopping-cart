import { createSlice } from "@reduxjs/toolkit";

export const ui = createSlice({
    name: "ui",
    initialState: { showCart: true, notification: null },
    reducers: {
        handleShowCart: (state) => {
            state.showCart = !state.showCart;
        },
        handleShowNotification: (state, action) => {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export const { handleShowCart, handleShowNotification } = ui.actions;
export default ui.reducer;
