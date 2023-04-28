import axios from 'axios';

const API_BASE = 'http://localhost:4000/api'
const POST_API = `${API_BASE}/posts`;


// creates a post -> sends http request to server and gets response
export const createPost = async (post) => {
    const response = await axios.post(POST_API, post)
    return response.data
}

// gets posts by user uid
export const findPost = async (userID) => {
    //console.log(`${POST_API}/user/${userID}`)
    const response = await axios.get(`${POST_API}/user/${userID}`)
    const posts = response.data
    return posts
}

export const findRestaurantPosts = async (userID) => {
    const response = await axios.get(`${POST_API}/restaurant/${userID}`)
    const posts = response.data
    return posts
}

// gets posts by followed users
export const findFollowedPosts = async (userID) => {
    const response = await axios.get(`${POST_API}/followed/${userID}`)
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