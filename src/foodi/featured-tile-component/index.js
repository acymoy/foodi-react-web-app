import React from "react";


// Carousel for the featured tiles (restaurants, articles, whatever)
const FeaturedTile = () => {
    return (
        <div
            className="carousel-item bg-image p-5 shadow-1-strong rounded mb-3 text-white d-flex flex-column 
                       align-items-start w-100 h-100"
            style={{ backgroundImage: `url('https://cdn.vox-cdn.com/thumbor/f-yCxg95Pw5VEpgGQcuKuSHWpwA=/0x0:1940x1358/1300x678/filters:focal(815x524:1125x834):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72187999/Captura_de_Pantalla_2023_02_24_a_la_s__17.30.30.0.png')` }}>

            <div className="mb-5 h1 bg-light bg-opacity-75 text-dark px-3"><strong>Article Title Here</strong></div>
            <div className='mt-5 bg-light bg-opacity-75 text-dark d-none d-md-block'>
                <strong>How Somali food in the diaspora holds the history of forced migration</strong> <br/>
                <strong>by Author Name | 4.28.23</strong>
            </div>
        </div>
    )
}

export default FeaturedTile;