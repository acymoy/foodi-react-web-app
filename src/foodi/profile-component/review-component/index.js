import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import exampleFeed from '../../data/example-feed.json';

// Thunk imports
import { findPostThunk } from '../../../services/posts-thunks';

// Component imports
import ReviewTile from "./review-tile";

const Reviews = (userID) => {
    //console.log('Rendering review component with userID ' + userID.userID)

    const { posts, loading } = useSelector(state => state.posts)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findPostThunk(userID.userID))
    }, [])

    return (
        <div className="">
            <h3>Reviews ({posts.length})</h3>
            {posts.map(x => <ReviewTile key={x._id} review={x} />)}
        </div>
    )
}

export default Reviews;