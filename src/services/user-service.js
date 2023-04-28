import axios from 'axios';

const API_BASE = 'http://localhost:4000/api'
const USER_API = `${API_BASE}/user`;

// finds single user
export const getUser = async (userID) => {
    const response = await axios.get(`${USER_API}/${userID}`)
    const user = response.data
    //console.log('getUser service', user)
    return user
}

// finds array of user info based on user ID array
export const getUsers = async (followObject) => {
    console.log('getUsers in service -> uid:')

    console.log(followObject)

    // defining object props outside of it
    const whichFollow = followObject.whichFollow
    const uid = followObject.uid

    console.log('sending GET request ' + `${USER_API}/${whichFollow}/${uid}`)

    const response = await axios.get(`${USER_API}/${whichFollow}/${uid}`)
    const users = response.data
    return users
}

// updates user
export const updateUser = async (user) => {
    const response = await axios.put(`${USER_API}/${user._id}`, user)
    return response
}

// creates user
export const createUser = async (user) => {
    const response = await axios.post(USER_API, user)
    return response.data
    
}