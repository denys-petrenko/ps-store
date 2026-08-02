import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/categoryApi";


const initialState = {
    items: [],
    isLoading: false,
    isError: null
}

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (category, { rejectWithValue }) => {
        try {
            return await getProducts(category);
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
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
    }
})

export default productsSlice.reducer;