import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { getCategories } from "../../api/categoriesApi";

const initialState = {
    categories: [],
    isLoading: false,
    isError: null
}

export const fetchAllCategories = createAsyncThunk(
    "categories/fetchAllCategories",
    async (_, { rejectWithValue }) => {
        try {
            return await getCategories();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCategories.pending, (state) => {
                state.isLoading = true;
                state.isError = null
            })
            .addCase(fetchAllCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories = action.payload
            })
            .addCase(fetchAllCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
    }
})

export default categoriesSlice.reducer;

export const selectParentCategoryMap = createSelector(
    [(state) => state.categories.categories],
    (categories) => {
        const map = new Map();

        for (const category of categories) {
            if (category.parentId) {
                map.set(category.slug, category.parentId);
            }
        }

        return map;
    }
)