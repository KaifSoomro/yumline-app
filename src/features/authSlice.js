import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getRegistered = createAsyncThunk("auth/register", async( values ) => {
    const response = await axios.post("http://localhost:8000/api/register", values);
    return console.log("response-register", response);
})

export const userLogin = createAsyncThunk("auth/login", async( values ) => {
    const response = await axios.post("http://localhost:8000/api/login", values);
    return response?.data?.token;
})

export const userProfile = createAsyncThunk("auth/profile", async( token ) => {

    const header = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

     const response = await axios.post("http://localhost:8000/api/profile",  {}, header);
    return response?.data?.userData
})


const authSlice = createSlice({
    name:"auth",
    initialState: {
        id: null,
        username: null,
        email: null,
        role: null,
        token: localStorage.getItem("token") || null,
        isLoading: false,
        error: null
    },
    reducers: {
        logout:( state, action ) => {
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder // getRegistered
        .addCase(getRegistered.pending, ( state ) => {
            state.isLoading = true;
        })
        .addCase(getRegistered.fulfilled, ( state ) => {
            state.isLoading = false;
            toast.success("Registration Successfull.")
        })
        .addCase(getRegistered.rejected, ( state, action ) => {
            state.error = action.error.message;
            state.isLoading = false;
            console.log("register error:", action.error.message)
            toast.error("Registration Failed.")
        })
        // userLogin
        .addCase(userLogin.pending, ( state ) => {
            state.isLoading = true;
        })
        .addCase(userLogin.fulfilled, ( state, action ) => {
            state.isLoading = false;
            localStorage.setItem("token", action.payload)
            state.token = action.payload;
            toast.success("Login Successfull.")
        })
        .addCase(userLogin.rejected, ( state, action ) => {
            state.error = action.error.message;
            state.isLoading = false;
            console.log("login error:", action.error.message)
            toast.error("Login Failed.")
        })
        // userProfile
        .addCase(userProfile.pending, ( state ) => {
            state.isLoading = true;
        })
        .addCase(userProfile.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.id = action.payload?.id;
            state.username = action.payload?.name;
            state.email = action.payload?.email;
            state.role = action.payload?.userRole;

            localStorage.setItem("username", action.payload?.name)
            localStorage.setItem("user-email", action.payload?.email)
            localStorage.setItem("user-role", action.payload?.userRole)

        })
        .addCase(userProfile.rejected, ( state, action ) => {
            state.error = action.error.message;
            state.isLoading = false;
        })
    }
})


export const { logout } = authSlice.actions;

export default authSlice.reducer;