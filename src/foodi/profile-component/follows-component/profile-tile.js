import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// Thunk imports
import { getUserThunk } from "../../../services/user-thunks";

const ProfileTile = ({ profile }) => {

    console.log(profile)

    // convert role to title case
    const role = profile.role.charAt(0).toUpperCase() +
        profile.role.slice(1).toLowerCase();

    return (
        <div>
            <Link to={`/profile/${profile._id}`} className='card' style={{textDecoration: 'none'}}>
                <div className='card-body row mb-0 pb-0'>
                    <div className='col-md-3'>
                        <img src={profile.avatar} className='img-fluid img-thumbnail rounded-circle' style={{height: '80%', width: '30%'}} alt='Profile' />
                    </div>
                    <div className='col-md-9'>
                        <h5>{profile.name}</h5>
                        <p className='text-muted'>{profile.location} | {role}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProfileTile;