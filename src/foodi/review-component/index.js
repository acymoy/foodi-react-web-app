import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Thunk imports
import { createPostThunk } from "../../services/posts-thunks";

const Review = () => {
    const { rid } = useParams();

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');

    const {currentUser} = useSelector((state) => state.auth);
    const {user, loading} = useSelector((state) => state.profile);
    console.log('profile, then currentUser')
    const profile = user[0]
    console.log(profile)
    console.log(currentUser)

    const navigate = useNavigate();
    const dispatchEvent = useDispatch();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can handle the form submission logic here, e.g. sending data to a server or updating state in a parent component
        console.log('Title:', title);
        console.log('Rating:', rating);
        console.log('Description:', description);
        const newPost = {
            title: title,
            rating: rating,
            text: description,
            restaurant: rid,
            user: currentUser._id,
            userAvatar: currentUser.avatar,
            restaurantAvatar: profile.avatar,
            date: Date.now(),
            name: currentUser.name,
            restaurantName: profile.name
        }
        console.log(newPost)
        await dispatchEvent(createPostThunk(newPost))
        navigate(`/profile/${rid}`)
        
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">Reviewing: {profile.name}</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id="title"
                                className="form-control"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rating">Rating (1-5):</label>
                            <input
                                type="number"
                                id="rating"
                                className="form-control"
                                min="1"
                                max="5"
                                value={rating}
                                onChange={handleRatingChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                className="form-control mb-2"
                                value={description}
                                onChange={handleDescriptionChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;
