import React from "react";
import { Link } from "react-router-dom";
import exampleFeed from '../../data/example-feed.json';

// Component imports
import ReviewTile from "./review-tile";

const Reviews = () => {

    const reviewArray = exampleFeed

    return (
        <div className="">
            <h3>Reviews ({reviewArray.length})</h3>
            {reviewArray.map(x => <ReviewTile key={x._id} review={x} />)}
        </div>
    )
}

export default Reviews;