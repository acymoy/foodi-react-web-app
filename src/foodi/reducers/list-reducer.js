import { createSlice } from '@reduxjs/toolkit';
import { getListsThunk, updateListThunk, deleteListThunk, createListThunk }
    from '../../services/list-thunks';

const initialState = {
    items: [],
    loading: false
}

const listSlice = createSlice({
    name: 'lists',
    initialState,
    extraReducers: {
        [getListsThunk.pending]:
            (state) => {
                state.loading = true
                state.lists = []
            },
        [getListsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [getListsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.lists = payload
            },

        [createListThunk.pending]:
            (state) => {
                state.loading = true
            },
        [createListThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [createListThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.lists.push(payload)
            },

        [deleteListThunk.pending]:
            (state) => {
                state.loading = true
            },
        [deleteListThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteListThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.lists = state.lists.filter(t => t._id !== payload)
            },

        [updateListThunk.pending]:
            (state) => {
                state.loading = true
            },
        [updateList.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [updateListThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const i = state.lists.findIndex((list) => list._id === payload._id)
                state.lists[i] = {
                    ...state.lists[i],
                    ...payload
                }
            }
    }

}
);

export default listSlice.reducer;