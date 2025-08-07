import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllRecipes = createAsyncThunk("recipes/all", async() => {
    const response = await axios.get("http://localhost:8000/upload/get-all-recipes");
    return response?.data?.allRecipes;
})

export const getOneRecipe = createAsyncThunk("recipes/single", async(id) => {
    const response = await axios.get(`http://localhost:8000/upload/get-one-recipe/${id}`);
    return response?.data?.singleRecipeData;
})

const recipesSlice = createSlice({
    name: "recipes",
    initialState: {
        allRecipesData: [],
        singleRecipe: [],
        isLoading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder // All Recipes Data
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
        // Single Recipe Data
        .addCase(getOneRecipe.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getOneRecipe.fulfilled, (state,action) => {
            state.isLoading = false;
            state.singleRecipe = action.payload;
            console.log("single-recipes-action", action.payload)
        })
        .addCase(getOneRecipe.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default recipesSlice.reducer;