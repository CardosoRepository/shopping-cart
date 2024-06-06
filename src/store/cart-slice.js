import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "show-cart",
    initialState: { cartItems: [], changed: false },
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload.item;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );

            state.changed = true;

            if (!existingItem) {
                state.cartItems.push({
                    ...newItem,
                    quantity: 1,
                    total: newItem.price,
                });
                return;
            }

            existingItem.quantity++;
            existingItem.total = existingItem.price * existingItem.quantity;
        },
        removeItemFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.item.id
            );

            state.changed = true;
        
            if (itemIndex === -1) {
                return;
            }

            const existingItem = state.cartItems[itemIndex];
            if (existingItem.quantity === 1) {
                state.cartItems.splice(itemIndex, 1);
                return;
            }

            existingItem.quantity--;
            existingItem.total = existingItem.price * existingItem.quantity;
        },
        replaceCart: (state, action) => {
            state.cartItems = action.payload.cartItems;
        }
    },
});

export const { addItemToCart, removeItemFromCart, replaceCart } = cartSlice.actions;
export default cartSlice.reducer;
