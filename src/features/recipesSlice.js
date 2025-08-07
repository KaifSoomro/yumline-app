import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllRecipes = createAsyncThunk("recipes/all", async() => {
    const response = await axios.get("http://localhost:8000/upload/get-all-recipes");
    return response?.data?.allRecipes;
})

const recipesSlice = createSlice({
    name: "recipes",
    initialState: {
        allRecipesData: [],
        isLoading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllRecipes.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllRecipes.fulfilled, (state,action) => {
            state.isLoading = false;
            state.allRecipesData = action.payload;
            console.log("recipes-action", action.payload)
        })
        .addCase(getAllRecipes.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default recipesSlice.reducer;