import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Thunk imports
import { getPlaceDetailsThunk } from "../../services/places-thunks";

const DetailComponent = () => {
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

    const { placeID } = useParams();
    console.log('placeId: ' + placeID)

    const { placeDetails, loading } = useSelector(state => state.places)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlaceDetailsThunk(placeID))
    }, [])

    const place = placeDetails

    const placeObject = {
        name: place.name,
        address: place.formatted_address,
        phone: place.formatted_phone_number,
        website: place.website,
        rating: place.rating,
        summary: place.editorial_summary ? place.editorial_summary.overview : 'No description available.',
        photos: place.photos
    }

    const photoRef = placeObject.photos !== undefined ? placeObject.photos[0].photo_reference : ''
    const photoLink = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${API_KEY}`


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={photoLink}
                        alt="Profile"
                        className="img-thumbnail rounded-circle"
                        style={{ width: '75%', height: '100%' }}
                    />
                </div>
                <div className="col-md-8 ps-0">
                    <div className="card">
                        <div className="card-body">
                            <div className='row d-flex justify-content-between'>
                                <h3 className='col-md-8'>{placeObject.name}</h3>
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <p className='col-md-8'>{placeObject.address}</p>
                            </div>
                            <p>
                                {placeObject.summary}
                            </p>
                            <div className='row d-inline'>
                                <i className="bi bi-asterisk"></i> Rating {placeObject.rating} <i className="bi bi-globe-americas"></i> {placeObject.website} <i className="bi bi-telephone"></i> {placeObject.phone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default DetailComponent;