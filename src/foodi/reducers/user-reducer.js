import { createSlice } from "@reduxjs/toolkit";

import { getUserThunk, updateUserThunk, createUserThunk, getUsersThunk }
    from '../../services/user-thunks';

const initialState = {
    user: [],
    loading: false
}

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getUserThunk.pending]:
            (state) => {
                state.loading = true
                state.user = []
            },
        [getUserThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [getUserThunk.fulfilled]:
            (state, { payload }) => {
                console.log('getUserThunk fulfilled')
                state.loading = false
                state.user = payload
            },
        
        [getUsersThunk.pending]:
            (state) => {
                state.loading = true
                state.followage = []
            },
        [getUsersThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [getUsersThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.followage = payload
            },

        [createUserThunk.pending]:
            (state) => {
                state.loading = true
            },
        [createUserThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [createUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.users.push(payload)
            },

        [updateUserThunk.pending]:
            (state) => {
                state.loading = true
            },
        [updateUserThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [updateUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.users = state.users.map(t => t._id === payload._id ? payload : t)
            }
    }
})

export default userSlice.reducer;