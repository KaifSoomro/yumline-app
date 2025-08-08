import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addRecipeData = createAsyncThunk("recipes/add", async(values) => {
    console.log(values)
    const response = await axios.post("http://localhost:8000/upload/add-recipe", values);
    return response?.data?.newRecipe;
})

export const getAllRecipes = createAsyncThunk("recipes/all", async() => {
    const response = await axios.get("http://localhost:8000/upload/get-all-recipes");
    return response?.data?.allRecipes;
})

export const getOneRecipe = createAsyncThunk("recipes/single", async(id) => {
    const response = await axios.get(`http://localhost:8000/upload/get-one-recipe/${id}`);
    return response?.data?.singleRecipeData;
})

export const findUserRecipes = createAsyncThunk("recipes/userRecipes", async(authorEmail) => {
    const response = await axios.post("http://localhost:8000/upload/single-user-recipe", {authorEmail:authorEmail});
    return response?.data?.singleUserData;
})

const recipesSlice = createSlice({
    name: "recipes",
    initialState: {
        addRecipe: [],
        allRecipesData: [],
        singleRecipe: [],
        singleUserData: [],
        isLoading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
        // Add Recipe data
        .addCase(addRecipeData.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addRecipeData.fulfilled, (state,action) => {
            state.isLoading = false;
            state.addRecipe = action.payload;
            console.log("add-recipes-action", action.payload)
        })
        .addCase(addRecipeData.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        })
        // All Recipes Data
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
          // Single User Data
        .addCase(findUserRecipes.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(findUserRecipes.fulfilled, (state,action) => {
            state.isLoading = false;
            state.singleUserData = action.payload;
            console.log("single-User-action", action.payload)
        })
        .addCase(findUserRecipes.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default recipesSlice.reducer;