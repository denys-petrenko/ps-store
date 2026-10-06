import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import favoritesReducer from "./slices/favoritesSlice";
import categoriesSlice from "./slices/categoriesSlice";


export const store = configureStore({
    reducer: {
        products: productsReducer,
        product: productReducer,
        cart: cartReducer,
        favorites: favoritesReducer,
        categories: categoriesSlice
        // user: userReducer,
        // isAuthenticated: isAuthenticatedReducer
    }
})