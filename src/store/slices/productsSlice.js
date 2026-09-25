import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsByCategory } from "../../api/categoryApi";
import { getAllProducts } from "../../api/productsApi";

const initialState = {
    items: [],
    categoryItems: [],
    isLoading: false,
    isError: null,
    isCategoryLoading: false,
    isCategoryError: null
}

export const fetchAllProducts = createAsyncThunk(
    "products/fetchAllProducts",
    async (_, { rejectWithValue }) => {
        try {
            return await getAllProducts();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const fetchProductsByCategory = createAsyncThunk(
    "products/fetchProductsByCategory",
    async (category, { rejectWithValue }) => {
        try {
            return await getProductsByCategory(category);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.isCategoryLoading = true;
                state.isCategoryError = null;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.isCategoryLoading = false;
                state.categoryItems = action.payload;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.isCategoryLoading = false;
                state.isCategoryError = action.payload;
            })
            .addCase(fetchAllProducts.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
    }
})


export default productsSlice.reducer;