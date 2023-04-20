import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import exampleFeed from './example-feed.json';

// Component imports
import FeedTileComponent from "../feed-tile-component";

const ReviewArray = exampleFeed

// Constructs the entire feed for the user. Uses masonry tiles to display.
const FeedComponent = () => {
    return (
        <div className=''>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}>
                <Masonry gutter="1.5rem">
                // ideally here we have a map function to display all the tiles listed in the feed
                    // https://cedricdelpoux.github.io/react-responsive-masonry/
                    {
                        ReviewArray.map(x => <FeedTileComponent key={x._id} who={x}
                            style={{ width: '100%', display: 'block' }} />)
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>

    )
}
export default FeedComponent;