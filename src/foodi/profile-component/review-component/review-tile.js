import React from "react";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

const ReviewTile = ({review}) => {

    const starNum = `Rating: ` + `<i class="bi bi-star-fill"></i>`.repeat(review.rating) +
        `<i class="bi bi-star"></i>`.repeat(5 - review.rating);

    return (
        <div className="card mb-3">
            <Link to={`/profile/${review.restaurant}`} className="card-body" style={{textDecoration: 'none'}}>
                <h5>{review.restaurantName}</h5>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(starNum) }}></p>
                <h6>
                    {review.title}
                </h6>
                <p>
                    {review.text}
                </p>
                <p>
                    <small className='text-muted'>Reviewed {review.date}</small>
                </p>
            </Link>
        </div>
    )
}
export default ReviewTile;