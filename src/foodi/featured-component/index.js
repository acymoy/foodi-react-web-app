import React from "react";

import features from '../data/example-features.json'
// Import components
import FeaturedTile from "../featured-tile-component";

// Generates the carousel of featured articles/restaurants
const FeaturedComponent = () => {
    // TODO:: Use selector to obtain the list of featured places, dispatch to dispatch thunks to 
    // modify the state/actions of the application  
    // {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {features.map(x => <FeaturedTile key={x._id} feature={x} />)}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default FeaturedComponent;