import React from "react";

// MOTD import
import messageOfTheDay from '../data/motd.json'

// Component imports
import FeedComponent from "../feed-component";
import FeaturedComponent from "../featured-component";

const HomeComponent = () => {
    // MOTD
   const messages = messageOfTheDay;
   const motd = messages[Math.floor(Math.random() * messages.length)];

    return (
        <div>
            <div className='row'>
                <FeaturedComponent />
            </div>
            <div className='row mb-2' >
                <div className='h4 text-center'>
                    <strong>{motd}</strong>
                </div>
            </div>
            <div className='row'>
                <FeedComponent />
            </div>
        </div>

    )
}

export default HomeComponent;