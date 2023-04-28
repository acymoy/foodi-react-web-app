import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './user-service';

export const getUserThunk = createAsyncThunk(
    'user/getUser', async (userID) => {
        const user = await service.getUser(userID)
        return user
    })

export const updateUserThunk = createAsyncThunk(
    'user/updateUser', async (user) => {
        await service.updateUser(user)
        return user
    })

export const createUserThunk = createAsyncThunk(
    'user/createUser', async (user) => {
        const newUser = await service.createUser(user)
        return newUser
    } )

export const getUsersThunk = createAsyncThunk(
    'user/getUsers', async (followObject) => {
        console.log('getUsersThunk -> Followage:')
        console.log(followObject)
        const users = await service.getUsers(followObject)
        return users
    })


