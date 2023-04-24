import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './list-service';

export const getListsThunk = createAsyncThunk(
    'lists/getLists', async (userID) =>
    await service.getLists(userID)
)

export const updateListThunk = createAsyncThunk(
    'lists/updateList', async (list) => {
        await service.updateList(list)
        return list
    }

)

export const createListThunk = createAsyncThunk(
    'lists/createList', async (list) => {
        const newList = await service.createList(list)
        return newList;
    }
)

export const deleteListThunk = createAsyncThunk(
    'lists/deleteThunk', async (list) => {
        await service.deleteList(list)
        return list._id
    }
)