import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem("cart")) || [],
    isModalOpen: false,
    isLoading: false,
    isError: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.items.some(el => el.id === action.payload.id)) return;
            state.items.push({ ...action.payload, quantity: 1 });
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.items = [];
        },
        increaseQuantity: (state, action) => {
            const product = state.items.find(item => item.id === action.payload.id);
            if (product && product.quantity < product.stock) {
                product.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const product = state.items.find(item => item.id === action.payload.id);
            if (product && product.quantity > 1) {
                product.quantity--;
            }
        },
        openCartModal: (state) => {
            state.isModalOpen = true;
        },
        closeCartModal: (state) => {
            state.isModalOpen = false;
        }
    }
})

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, openCartModal, closeCartModal } = cartSlice.actions;

export default cartSlice.reducer;