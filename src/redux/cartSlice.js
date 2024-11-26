// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);

            if (existingItem) {
                existingItem.amount += 1;
            } else {
                state.items.push({ ...item, amount: 1 });
            }
            state.totalPrice += item.prix;
        },
        decrementItemQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find((i) => i.id === itemId);
            if (item && item.amount > 1) {
                item.amount -= 1;
                state.totalPrice -= item.prix;
            }
        },
        incrementItemQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find((i) => i.id === itemId);
            if (item) {
                item.amount += 1;
                state.totalPrice += item.prix;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        removeItemFromCart: (state, action) => {
            const itemId = action.payload;
            const itemToRemove = state.items.find((item) => item.id === itemId);
            if (itemToRemove) {
                state.items = state.items.filter((item) => item.id !== itemId);
                state.totalPrice -= itemToRemove.prix * itemToRemove.amount;
            }
        },
    },
});

export const { addItemToCart, decrementItemQuantity, incrementItemQuantity, clearCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
