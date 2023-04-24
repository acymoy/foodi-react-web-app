import axios from 'axios';

const API_BASE = 'http://localhost:4000/api'
const LIST_API = `${API_BASE}/lists`;

export const getLists = async (userID) => {
    const response = await axios.get(`${LIST_API}/${userID}`)
    const lists = response.data
    return lists
}

export const createList = async (list) => {
    const response = await axios.post(LIST_API, list)
    return response.data
}

export const updateList = async (list) => {
    const response = await axios.put(`${LIST_API}/${list._id}`, list)
    return response
}

export const deleteList = async (list) => {
    const response = await axios.delete(`${LIST_API}/${list._id}`, list)
    return response
}