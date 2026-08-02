import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem("favorites")) || [],
    isLoading: false,
    isError: null
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            if (state.items.some(el => el.id === action.payload.id)) return;
            state.items.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearFavorites: (state) => {
            state.items = [];
        }
    }
})

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;