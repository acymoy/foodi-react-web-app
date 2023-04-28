import { createSlice } from "@reduxjs/toolkit";

import {
    findAllPostsThunk, deletePostThunk,
    createPostThunk, findPostThunk, findFollowedPostsThunk
} from '../../services/posts-thunks'

// example import
import posts from '../data/example-feed.json';

// when creating the slice, it starts off with an empty post array to be filled in
// after getting from server
const initialState = {
    posts: [],
    userPosts: [],
    allPosts: [],
    loading: false
}

// adjusts the state of the posts held in the store
// state objects: posts, userPosts, allPosts, loading => posts are a user's posts (on profile), userPosts are posts by user's followers (on feed),
// allPosts are all posts (on feed), loading is boolean.
const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [findAllPostsThunk.pending]:
            (state) => {
                // console.log('findAllPostsThunk.pending')
                state.loading = true
                state.allPosts = []
            },
        [findAllPostsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findAllPostsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.allPosts = payload
            },

        [deletePostThunk.pending]:
            (state) => {
                state.loading = true
            },
        [deletePostThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deletePostThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.posts = state.posts.filter(l => l._id !== payload)
            },

        [createPostThunk.pending]:
            (state) => {
                state.loading = true
            },
        [createPostThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [createPostThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.posts.push(payload)
            },

        [findPostThunk.pending]:
            (state) => {
                state.loading = true
            },
        [findPostThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findPostThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.posts = payload
            },
        
        [findFollowedPostsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.userPosts = payload
            },
        [findFollowedPostsThunk.pending]:
            (state) => {
                state.loading = true
                state.userPosts = []
            },
        [findFollowedPostsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    }
})

export default postSlice.reducer;