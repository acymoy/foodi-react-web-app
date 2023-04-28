import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

// Thunk imports
import { updateUserThunk } from "../../services/auth-thunks";


const EditProfile = () => {
    const { currentUser } = useSelector(state => state.auth);
    const [profile, setProfile] = useState(currentUser)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const profileSaveHandler = (e) => {
        e.preventDefault()
        dispatch(updateUserThunk(profile))
        navigate('/profile')
    }

    const nameChangeHandler = (e) => {
        setProfile({ ...profile, name: e.target.value })
    }
    const locationChangeHandler = (e) => {
        setProfile({ ...profile, location: e.target.value })
    }
    const descriptionChangeHandler = (e) => {
        setProfile({ ...profile, description: e.target.value })
    }
    const passwordChangeHandler = (e) => {
        setProfile({ ...profile, password: e.target.value })
    }
    const websiteChangeHandler = (e) => {
        setProfile({ ...profile, website: e.target.value })
    }
    const phoneChangeHandler = (e) => {
        setProfile({ ...profile, phone: e.target.value })
    }

    console.log('profile')
    console.log(profile)

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
                            <h4>Edit Profile Information</h4>
                            <div className='row d-flex justify-content-between'>
                                <input type='name' className='col-md-8' id='name'
                                    placeholder='Name' value={profile.name}
                                    onChange={nameChangeHandler}></input>
                                <button className="btn btn-primary col-md-2" onClick={profileSaveHandler}>Save</button>
                            </div>
                            <div className='row my-2 d-flex justify-content-between'>
                                <input type='location' className='col-md-8' id='location'
                                    placeholder='Location' value={profile.location}
                                    onChange={locationChangeHandler}></input>
                                <Link to='/profile' className='btn btn-secondary col-md-2'><i className="bi bi-x-circle"></i></Link>
                            </div>
                            <div className='row my-2'>
                                <textarea type='bio' className='col-md-8' id='bio'
                                    placeholder='Bio' value={profile.description}
                                    onChange={descriptionChangeHandler}></textarea>
                            </div>
                            <p>Private Data:</p>
                            Password:
                            <div className='row mb-2'>
                                <input type='password' className='col-md-8' id='password'
                                    placeholder='Password' value={profile.password}
                                    onChange={passwordChangeHandler}></input>
                            </div>
                            Phone #:
                            <div className='row mb-2'>
                                <input type='phone' className='col-md-8' id='phone'
                                    placeholder='Phone #' value={profile.phone}
                                    onChange={phoneChangeHandler}></input>
                            </div>
                            Website:
                            <div className='row mb-2'>
                                <input type='website' className='col-md-8' id='website'
                                    placeholder='Website' value={profile.website}
                                    onChange={websiteChangeHandler}></input>
                            </div>
                            Email (cannot be changed):
                            <div className='row'>
                                <input type='email' className='col-md-8' id='email'
                                    placeholder='Email' disabled value={profile.email}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;