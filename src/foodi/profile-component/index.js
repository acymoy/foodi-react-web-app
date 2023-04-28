import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Thunk imports
import { getUserThunk } from "../../services/user-thunks";
import { updateUserThunk } from "../../services/auth-thunks";
import { updateUserThunk as updateOtherUserThunk } from "../../services/user-thunks";

// Component imports
import ProfileMenu from "./profile-menu-component";
import Reviews from "./review-component";
import Follow from "./follows-component";
import Lists from "./list-component";
import MyProfile from './my-profile-component';

const ProfileComponent = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/');
    const param = paths[2];

    if (param === undefined) {
        console.log('Rendering my profile (param undefined)')
        return <MyProfile />
    } else if (param === 'followers' || param === 'following' || param === 'lists' || param === 'reviews') {
        console.log('Rendering my profile (param defined as ' + param + ')')
        return <MyProfile />
    } else {
        console.log('Rendering another user profile');
        return <OtherUserProfile userID={param}/>
    }
}


const OtherUserProfile = ({userID}) => {

    //console.log(userID)

    //console.log('other user profile')
    const { user, loading } = useSelector(state => state.profile)
    //console.log(user)

    const navigate = useNavigate()
    // for updating the profile state on url change
    useEffect(() => {
        //console.log('dispatching getuserthunk on url change')
        dispatch(getUserThunk(userID))
    }, [navigate])

    // loads profile on page load
    const dispatch = useDispatch()
    useEffect(() => {
        //console.log('dispatching getuserthunk')
        dispatch(getUserThunk(userID))
    }, [])



    //console.log('Rendering another user profile with id: ' + userID)
    return (
        <div>
            {
                // i literally couldn't tell you why i had to do this, but 
                // it wouldn't work without it :) the user object kept
                // disappearing if i assigned the user object to variable
                user.map(x => <ProfilePage key={x._id} who={x} />)
            }
        </div>

    )
};

// external profile page (other user)
const ProfilePage = (who) => {
    //console.log('loaded profilepage of ' + who.who.name)
    const whoObject = who.who
    //console.log(whoObject)

    const dispatch = useDispatch()

    const userID = whoObject._id

    const { currentUser } = useSelector(state => state.auth)
    const [profile, setProfile] = useState(currentUser)

    const [viewedProfile, setViewedProfile] = useState(whoObject)

    const navigate = useNavigate()
    if (profile !== null) {
        if (profile._id === whoObject._id) {
            navigate('/profile')
        }
    }


    const followHandler = (e) => {
        //e.preventDefault()
        //console.log('followHandler called')
        setProfile({ ...profile, following: [...profile.following, userID] })
        setViewedProfile({ ...viewedProfile, followers: [...viewedProfile.followers, profile._id] })
    }

    const unfollowHandler = (e) => {
        //console.log('unfollowHandler called')
        const newFollowing = profile.following.filter(x => x !== userID)
        setProfile({ ...profile, following: newFollowing })
        setViewedProfile({ ...viewedProfile, followers: viewedProfile.followers.filter(x => x !== profile._id) })
    }

    // useEffect every time profile is updated, since it doesn't reflect
    // the updated state right away... so there was lack of db update
    useEffect(() => {
        dispatch(updateUserThunk(profile))
        dispatch(updateOtherUserThunk(viewedProfile))
    }, [profile, viewedProfile])

    //console.log(profile)

    const isFollowing = () => {
        if (profile !== null) {
            if (profile.following.includes(userID)) {
                return (
                    <button className="btn btn-secondary col-md-2" onClick={unfollowHandler}>Unfollow</button>
                )
            } else {
                return (
                    <button className="btn btn-primary col-md-2" onClick={followHandler}>Follow</button>
                )
            }
        }
    }

    const drawReviewButton = () => {
        if (profile !== null) {
            if (whoObject.role === 'RESTAURANT' && profile.role === 'INDIVIDUAL') {
                return (
                    <Link to={`/review/${whoObject._id}`} className="btn btn-light col-md-2">Write a Review</Link>
                )
            }
        }
            
    }
    const drawRestaurantInfo = () => {
        if (whoObject.role === 'RESTAURANT') {
            return (
                <div className='row d-inline'>
                    <i className="bi bi-door-open"></i> Opened {whoObject.dob.slice(0, 10)} <i className="bi bi-globe-americas"></i> {whoObject.cuisine} <i className="bi bi-telephone"></i> {whoObject.phone}
                </div>
            )
        }
    }

    // For rendering the different menu options, since Routes is being fucky
    const { pathname } = useLocation();
    const paths = pathname.split('/');
    const listPath = paths[3]
    const menuItem = () => {
        switch (listPath) {
            case undefined:
                return <Reviews userID={whoObject._id} />
                break;
            case 'reviews':
                return <Reviews userID={whoObject._id} />
                break;
            case 'followers':
                return <Follow profile={whoObject} render='Followers'/>
                break;
            case 'following':
                return <Follow profile={whoObject} render='Following'/>
                break;
            case 'lists':
                return <Lists />
                break;
        }
    }


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={whoObject.avatar}
                        alt="Profile"
                        className="img-thumbnail rounded-circle"
                        style={{ width: '75%', height: '100%'}}
                    />
                </div>
                <div className="col-md-8 ps-0">
                    <div className="card">
                        <div className="card-body">
                            <div className='row d-flex justify-content-between'>
                                <h3 className='col-md-8'>{whoObject.name}</h3>
                                {isFollowing()}
                            </div>
                            <div className='row mt-2 d-flex justify-content-between'>
                                <p className='col-md-8'>{whoObject.location}</p>
                                {drawReviewButton()}
                            </div>

                            <p>
                                {whoObject.description}
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
                    {menuItem()}
                    {/*
                        <Routes>
                        <Route index
                            element={<Reviews userID={whoObject._id} />} />
                        <Route path='reviews'
                            element={<Reviews userID={whoObject._id} />} />
                        <Route path='followers'
                            element={<Follow />} />
                        <Route path='following'
                            element={<Follow />} />
                        <Route path='lists'
                            element={<Lists />} />
                        </Routes>
                    */}




                </div>
            </div>
        </div >
    );
}

export default ProfileComponent;
