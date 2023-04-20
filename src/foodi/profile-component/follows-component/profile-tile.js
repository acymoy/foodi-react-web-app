import React from "react";
import { Link } from "react-router-dom";

// Component imports

const ProfileTile = (profileObject) => {
    const profile = profileObject.profile;

    return (
        <div>
            <div className='card'>
                <div className='card-body row'>
                    <div className='col-md-3'>
                        <img src={profile.image} className='img-fluid img-thumbnail' alt='Profile' />
                    </div>
                    <div className='col-md-9'>
                        <h5>{profile.name}</h5>
                        <p className='text-muted'>{profile.location} | Restaurant/Individual</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTile;