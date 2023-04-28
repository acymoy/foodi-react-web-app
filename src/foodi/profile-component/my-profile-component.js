import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

// Component imports
import ProfileMenu from "./my-profile-menu-component";
import Reviews from "./review-component";
import Follow from "./follows-component";
import Lists from "./list-component";

const MyProfile = () => {
    const { currentUser } = useSelector((state) => state.auth);
    console.log('currentUser is now:')
    console.log(currentUser)
    const drawRestaurantInfo = () => {
        if (currentUser.role === 'RESTAURANT') {
            return (
                <div className='row d-inline'>
                    <i className="bi bi-door-open"></i> Opened {currentUser.dob.slice(0, 10)} <i className="bi bi-globe-americas"></i> {currentUser.cuisine} <i className="bi bi-telephone"></i> {currentUser.phone}
                </div>
            )
        }
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={currentUser.avatar}
                        alt="Profile"
                        className="img-thumbnail rounded-circle"
                        style={{ width: '75%', height: '100%'}}
                    />
                </div>
                <div className="col-md-8 ps-0">
                    <div className="card">
                        <div className="card-body">
                            <div className='row d-flex justify-content-between'>
                                <h3 className='col-md-8'>{currentUser.name}</h3>
                                <Link to='/edit-profile' className="btn btn-secondary col-md-2">Edit Profile</Link>
                            </div>
                            <p>{currentUser.location}</p>
                            <p>
                                {currentUser.description}
                            </p>
                            {drawRestaurantInfo()}
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
                        <Route index
                            element={<Reviews userID={currentUser._id} />} />
                        <Route path={`/reviews`}
                            element={<Reviews userID={currentUser._id} />} />
                        <Route path='/followers'
                            element={<Follow profile={currentUser} render='Followers'/>} />
                        <Route path='/following'
                            element={<Follow profile={currentUser} render='Following'/>} />
                        <Route path='/lists'
                            element={<Lists />} />
                    </Routes>
                </div>
            </div>






        </div >
    );
};

export default MyProfile;
