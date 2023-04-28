import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './places-service';

export const getPlacesThunk = createAsyncThunk(
    'places/getPlaces', async (query) => {
        const places = await service.getPlaces(query)
        console.log('getPlacesThunk in places-thunks.js: ')
        console.log(places)
        return places
    }
)

export const getPlaceDetailsThunk = createAsyncThunk(
    'places/getPlaceDetails', async (placeID) => {
        const place = await service.getPlaceDetails(placeID)
        console.log('getPlaceDetailsThunk in places-thunks.js: ')
        console.log(place.result)
        return place.result
    }
)
