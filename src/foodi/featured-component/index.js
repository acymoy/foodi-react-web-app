import React from "react";

// Import components
import FeaturedTile from "../featured-tile-component";

// Generates the carousel of featured articles/restaurants
const FeaturedComponent = () => {
    // TODO:: Use selector to obtain the list of featured places, dispatch to dispatch thunks to 
    // modify the state/actions of the application  
    return (
        <div id = 'featuredCarousel' className = 'carousel slide' data-ride = 'carousel'>
            <div className = 'carousel-inner'>
                <FeaturedTile/>
            </div>
            <a className = 'carousel-control-prev mb-5' href = '#featuredCarousel' role = 'button' data-slide = 'prev'>
                <span className = 'carousel-control-prev-icon' aria-hidden = 'true'></span>
                <span className = 'visually-hidden'>Previous</span>
            </a>
            <a className = 'carousel-control-next mb-5' href = '#carouselExampleControls' role = 'button' data-slide = 'next'>
                <span className = 'carousel-control-next-icon' aria-hidden = 'true'></span>
                <span className = 'visually-hidden'>Next</span>
            </a>
        </div>
    )
}

export default FeaturedComponent;