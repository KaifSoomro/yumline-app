import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import fetchReducer from "../features/fetchSlice";
import recipesReducer from "../features/recipesSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        fetch: fetchReducer,
        recipes: recipesReducer
    }
})