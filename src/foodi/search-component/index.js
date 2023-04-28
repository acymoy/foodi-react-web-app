import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useLayout } from "react";
import { useParams } from "react-router-dom";

// Thunk imports
import { getPlacesThunk } from "../../services/places-thunks";

// Component imports
import PlaceTileComponent from "./place-tile-component";

const SearchComponent = () => {

    const { query } = useParams();
    //console.log('query is ' + query)
    // retrieve state.profile.followage results from service call
    const { places, loading } = useSelector(state => state.places)

    const dispatch = useDispatch()

    useEffect(() => {
        //console.log('dispatching getplacesthunk')
        dispatch(getPlacesThunk(query))
    }, [])

    //console.log(places)
    const candidates = places.candidates
    //console.log(candidates)

    return (
        <div>
            <h3 className='pt-2 text-center'>Search Results</h3>
            <div className='d-flex justify-content-center'>
                {candidates && candidates.map((place) => <PlaceTileComponent place={place} />)}
            </div>
        </div>

    )
}

export default SearchComponent;