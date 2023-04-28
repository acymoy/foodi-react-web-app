import React from "react";
import { Link } from "react-router-dom";

const PlaceTileComponent = ({ place }) => {

    const API_KEY = 'AIzaSyDdGBlMszZ6s_-x2j6ivHD9klhoy2GwLUQ'
    const photoRef = place.photos ? place.photos[0].photo_reference : ''
    const photoLink = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${API_KEY}`

    return (
        <div className='justify-content-center col-md-8'>
            <Link to={`/details/${place.place_id}`} className='card' style={{textDecoration: 'none'}}>
                <div className='card-body row mb-0 pb-0'>
                    <div className='col-md-3'>
                        <img src={photoLink} className='img-fluid img-thumbnail rounded-circle' alt='Profile' />
                    </div>
                    <div className='col-md-9'>
                        <h5>{place.name}</h5>
                        <p className='text-muted'>{place.formatted_address} | {place.rating} stars</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PlaceTileComponent;