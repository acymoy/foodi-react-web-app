import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './posts-service'

export const findAllPostsThunk = createAsyncThunk(
    'posts/findAllPosts', async () => 
    await service.getPosts()
)

export const findFollowedPostsThunk = createAsyncThunk(
    'posts/findFollowedPosts', async (userID) => {
        console.log('posts-thunk: findfollowedpostsThunk')
        const posts = await service.findFollowedPosts(userID)
        return posts
    }
)

export const deletePostThunk = createAsyncThunk(
    'posts/deletePost',
    async (postID) => {
        await service.deletePost(postID)
        return postID
    }
)

export const createPostThunk = createAsyncThunk(
    'posts/createPost',
    async (post) => {
        const newPost = await service.createPost(post)
        return newPost
    }
)

export const findPostThunk = createAsyncThunk(
    'posts/findPost', async (userID) => {
        const posts = await service.findPost(userID)
        return posts
    }
)