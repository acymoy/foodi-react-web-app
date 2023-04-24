import axios from 'axios';

const API_BASE = 'http://localhost:4000/api'
const POST_API = `${API_BASE}/posts`;


// creates a post -> sends http request to server and gets response
export const createPost = async (post) => {
    const response = await axios.post(POST_API, post)
    return response.data
}

// filters the posts -> sends http request to server and gets response
// filters by user ID (to obtain IDs of followed users)
export const findPost = async (userID) => {
    const response = await axios.get(POST_API, ids)
    const posts = response.data
    return posts
}

// gets all posts (for anonymous users)
export const getPosts = async () => {
    const response = await axios.get(POST_API)
    const posts = response.data
    return posts
}

// delete review
export const deletePost = async (tuit) => {
    const response = await axios.delete(`${POST_API}/${tuit}`)
}