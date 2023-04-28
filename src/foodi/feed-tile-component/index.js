import React from "react";
import DOMPurify from 'dompurify';

import { Link } from "react-router-dom";

// post object should have the following properties:
// name, profilePicture, title, text, rating, image
const FeedTileComponent = (post) => {
    post = post.who;
    // generates the number of stars based on the rating
    const starNum = `<i class="bi bi-star-fill"></i>`.repeat(post.rating) +
        `<i class="bi bi-star"></i>`.repeat(5 - post.rating);

    // cuts off the text after a certain number of characters
    function fn(text, count) {
        return text.slice(0, count) + (text.length > count ? "..." : "");
    }

    // 120 character cutoff
    const reviewText = fn(post.text, 120)

    //console.log(fn("aognaglkanglnagln", 10));
    //console.log('generating tile')
    //console.log(post)
    return (
        <div className=''>
            <div className="col-md-12">
                <div className="card">
                    <div className="row card-body">
                        <div className = ' col-8'>
                            <div className='ratio ratio-1x1 rounded-circle overflow-hidden mb-2'
                                style={{ height: '50%', width: '30%' }}>
                                <img src={post.userAvatar} alt="Profile Picture"
                                    className="mr-3 border rounded-circle"
                                    style={{ objectFit: 'cover', objectPosition: 'center' }} />
                            </div>
                            <div className="media-body">
                                <div className="mt-0"><Link to={`/profile/${post.user}`}>{post.name}</Link> reviewed <Link to={`/profile/${post.restaurant}`}>{post.restaurantName}</Link></div>
                                <p className="mb-0" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(starNum) }}>
                                </p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <img src={post.restaurantAvatar} alt="Restaurant Picture" className = 'img-fluid rounded-circle'/>
                        </div>
                        <div className="media">
                                <p className="mb-0">{post.title}</p>
                                <p className="text-muted mb-0">{reviewText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedTileComponent;