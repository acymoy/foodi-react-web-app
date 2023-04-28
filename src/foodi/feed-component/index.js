import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import exampleFeed from '../data/example-feed.json';
import { useSelector, useDispatch } from 'react-redux';

// Component imports
import FeedTileComponent from "../feed-tile-component";

// Thunk imports
import {
    findAllPostsThunk, findPostThunk,
    findFollowedPostsThunk
} from '../../services/posts-thunks';

// Constructs the entire feed for the user. Uses masonry tiles to display.
const FeedComponent = () => {
    const { allPosts, loading } = useSelector(state => state.posts)

    const { currentUser } = useSelector(state => state.auth)

    const { userPosts } = useSelector(state => state.posts)

    const dispatch = useDispatch()
    useEffect(() => {
        //console.log('finding posts')
        if (currentUser) {
            //console.log('current user exists')
            dispatch(findFollowedPostsThunk(currentUser._id))
        }
        //console.log('dispatching finding all posts')
        dispatch(findAllPostsThunk())

    }, [currentUser])

    const renderMyFeed = () => {
        if (currentUser) {
            //console.log(currentUser)
            if (userPosts.length === 0) {
                return (
                    <div>
                        <h4 className='text-center'>It looks like there aren't any followed posts to display :((</h4>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h4 className='text-center'>My Feed</h4>
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}>
                            <Masonry gutter="1.5rem">
                        // ideally here we have a map function to display all the tiles listed in the feed
                                // https://cedricdelpoux.github.io/react-responsive-masonry/
                                {
                                    userPosts.map(x => <FeedTileComponent key={x._id} who={x}
                                        style={{ width: '100%', display: 'block' }} />)
                                }
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>

                )
            }
        }

    }

    const renderGlobalFeed = () => {
        if (allPosts) {
            return (
                <div>
                    <h4 className='text-center'>Recent Posts</h4>
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}>
                        <Masonry gutter="1.5rem">
                    // ideally here we have a map function to display all the tiles listed in the feed
                            // https://cedricdelpoux.github.io/react-responsive-masonry/
                            {
                                allPosts.map(x => <FeedTileComponent key={x._id} who={x}
                                    style={{ width: '100%', display: 'block' }} />)
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                </div>

            )
        }

    }

    return (
        <div className=''>
            {renderMyFeed()}
            <br />
            {renderGlobalFeed()}
        </div>

    )
}
export default FeedComponent;