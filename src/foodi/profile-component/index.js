import React from "react";
import { Routes, Route } from "react-router-dom";

// Component imports
import ProfileMenu from "./profile-menu-component";
import Reviews from "./review-component";
import Follow from "./follows-component";
import Lists from "./list-component";

const ProfilePage = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src="https://via.placeholder.com/200"
                        alt="Profile"
                        className="img-thumbnail"
                    />
                </div>
                <div className="col-md-8 ps-0">
                    <div className="card">
                        <div className="card-body">
                            <h3>User Name</h3>
                            <p>Email: user@example.com</p>
                            <p>Location: City, State</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>
                                About Me: Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Proin volutpat odio eu sem fermentum auctor. Nullam non
                                augue vitae neque bibendum condimentum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className='col-md-2'>
                    <ProfileMenu />
                </div>
                <div className='col-md-9'>
                    <Routes>
                        <Route path='/'
                            element={<Reviews />} />
                        <Route path='/followers'
                            element={<Follow />} />
                        <Route path='/following'
                            element={<Follow />} />
                        <Route path='/lists'
                            element={<Lists />} />
                    </Routes>



                </div>
            </div>
        </div >
    );
};

export default ProfilePage;
