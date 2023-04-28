import { createSlice } from '@reduxjs/toolkit';

import { getPlacesThunk, getPlaceDetailsThunk } from '../../services/places-thunks';

const initialState = {
    places: [],
    placeDetails: {
        name: '',
        address: '',
        phone: '',
        website: '',
        rating: '',
        summary: '',
        photos: []
    },
    loading: false
}

const placesSlice = createSlice({
    name: 'places',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getPlacesThunk.pending]:
            (state) => {
                state.loading = true
                state.places = []
            },
        [getPlacesThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [getPlacesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.places = payload
            }
        ,
        [getPlaceDetailsThunk.pending]:
            (state) => {
                state.loading = true
                state.placeDetails = []
            },
        [getPlaceDetailsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [getPlaceDetailsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.placeDetails = payload
            }
    }
}
)

export default placesSlice.reducer;