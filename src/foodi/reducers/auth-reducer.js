import { createSlice } from "@reduxjs/toolkit";

import {
    loginThunk, logoutThunk, profileThunk,
    registerThunk, updateUserThunk
}
    from '../../services/auth-thunks';

const authSlice = createSlice({
    name: 'auth',
    initialState: { currentUser: null, loading: 'idle' },
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            console.log('loginthunk fulfilled', payload)
            state.currentUser = payload;
            state.loading = 'done?'
        },
        [loginThunk.pending]: (state) => {
            state.loading = 'pending';
        },
        [loginThunk.rejected]: (state, action) => {
            state.loading = 'idle';
            state.error = action.error;
        },

        [logoutThunk.fulfilled]: (state) => {
            console.log('logoutthunk fulfilled')
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            console.log('updateUserThunk fulfilled')
            console.log(payload)
            state.currentUser = payload;
        }
    }
})
export default authSlice.reducer;
