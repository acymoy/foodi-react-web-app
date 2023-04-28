import React from "react";


// Carousel for the featured tiles (restaurants, articles, whatever)
const FeaturedTile = ({feature}) => {
    return (
        <div
            className="carousel-item bg-image p-5 shadow-1-strong rounded mb-3 text-white d-flex flex-column 
                       align-items-start w-100 h-100"
            style={{ backgroundImage: `url('${feature.banner}')` }}>

            <div className="mb-5 h1 bg-light bg-opacity-75 text-dark px-3"><strong>{feature.title}</strong></div>
            <div className='mt-5 bg-light bg-opacity-75 text-dark d-none d-md-block'>
                <strong>{feature.description}</strong> <br/>
                <strong>by {feature.author} | {feature.dob}</strong>
            </div>
        </div>
    )
}

export default FeaturedTile;