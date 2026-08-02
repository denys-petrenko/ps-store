import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMergedProduct } from "../../utils/product/getMergedProduct";

const initialState = {
    product: null,
    isLoading: false,
    error: null
}

export const fetchProduct = createAsyncThunk(
    "product",
    async (slug, { rejectWithValue }) => {
        try {
            return getMergedProduct(slug);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default productSlice.reducer;