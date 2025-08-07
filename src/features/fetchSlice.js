import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
    name:"fetch",
    initialState: {
        mobileNav: false
    },
    reducers: {
        handleOpenMobileNav: ( state, action ) => {
            state.mobileNav = true;
        },
        handleCloseMobileNav: ( state, action ) => {
            state.mobileNav = false;
        }
    }
})

export const { handleOpenMobileNav, handleCloseMobileNav } = fetchSlice.actions;
export default fetchSlice.reducer;

