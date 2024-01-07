import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: '',
    error_other: ''
}

// createAsyncThunk(actionType, callback)
// createAsyncThunk automatically generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data)
})

export const deleteUser = createAsyncThunk('user/deleteUser', (userId) => {
    return axios
        .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => ({...response.data, userId}))
})

export const createUser = createAsyncThunk('user/createUser', (userDetails => {
    return axios
        .post(`https://jsonplaceholder.typicode.com/users`, userDetails)
        .then(response => response.data)
}))

export const updateUser = createAsyncThunk('user/updateUser', (userDetails => {
    return axios
        .put(`https://jsonplaceholder.typicode.com/users/${userDetails.id}`, userDetails.updateFields)
        .then(response => response.data)
}))

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            // GET users
            .addCase(fetchUsers.pending, state => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload
                state.error = ''
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.users = []
                state.error = action.error.message
            })
            // DELETE user
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.error_other = ""
                state.users = state.users.filter(user => user.id !== action.payload.userId)
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.error_other = action.error.message
            })
            // POST user
            .addCase(createUser.fulfilled, (state, action) => {
                state.error_other = ""
                state.users.unshift(action.payload)
            })
            .addCase(createUser.rejected, (state, action) => {
                state.error_other = action.error.message
            })
            // PUT user
            .addCase(updateUser.fulfilled, (state, action) => {
                state.error_other = ""
                state.users = state.users.map((user) => {
                    if (user.id === action.payload.id) {
                        return action.payload
                    } else {
                        return user
                    }
                })
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.error_other = action.error.message
            })

    }   
})

export default userSlice.reducer;