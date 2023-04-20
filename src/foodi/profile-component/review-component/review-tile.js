import React from "react";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

const ReviewTile = (reviewObject) => {
    const review = reviewObject.review;

    const starNum = `Rating: ` + `<i class="bi bi-star-fill"></i>`.repeat(review.rating) +
        `<i class="bi bi-star"></i>`.repeat(5 - review.rating);

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5>{review.restaurant_id}</h5>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(starNum) }}></p>
                <h6>
                    {review.title}
                </h6>
                <p>
                    {review.text}
                </p>
                <p>
                    <small className='text-muted'>Reviewed {review.time}</small>
                </p>
            </div>
        </div>
    )
}
export default ReviewTile;