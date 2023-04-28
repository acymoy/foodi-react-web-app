import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './auth-service';

export const loginThunk = createAsyncThunk(
    'user/login', async (credentials) => {
        //console.log('auth-thunks, loginThunk: ', credentials)
        const user = await service.login(credentials);
        //console.log(user)
        return user;
    });

export const logoutThunk = createAsyncThunk(
    'user/logout', async () => {
        return await service.logout();
    });

export const profileThunk = createAsyncThunk(
    'user/profile', async () => {
        const user = await service.profile();
        return user;
    });

export const updateUserThunk = createAsyncThunk(
    'user/update', async (updates) => {
        //console.log('auth-thunks, updateUserThunk: ', updates)
        await service.updateUser(updates);
        return updates
    });

export const registerThunk = createAsyncThunk(
    'user/register', async (user) => {
        const newUser = await service.register(user);
        return newUser;
    });