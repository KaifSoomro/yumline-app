import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
    name:"fetch",
    initialState: {
        mobileNav: false,
        categorie: "",
    },
    reducers: {
        handleOpenMobileNav: ( state ) => {
            state.mobileNav = true;
        },
        handleCloseMobileNav: ( state ) => {
            state.mobileNav = false;
        },
        handleCategorie: ( state, action ) => {
            state.categorie = action.payload;
        }
    }
})

export const { handleOpenMobileNav, handleCloseMobileNav, handleCategorie } = fetchSlice.actions;
export default fetchSlice.reducer;

