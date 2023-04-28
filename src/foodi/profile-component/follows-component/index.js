import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// Component imports
import ProfileTile from "./profile-tile";

// Thunk imports
import { getUserThunk } from "../../../services/user-thunks";
import { getUsersThunk } from "../../../services/user-thunks";

const Follows = ({profile, render}) => {

    /* infinite request problem here
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('getting user ID ' + userID.userID)
        dispatch(getUserThunk(userID.userID))
    }, [])
    */
    console.log('profile is: ')
    console.log(profile)
    const { followage, loading } = useSelector(state => state.profile)

    const uid = profile._id

    let followObject;
    const dispatch = useDispatch()
    useEffect(() => {
        //console.log('getting followages')
        const followObject = {uid: uid, whichFollow: render.toLowerCase()}
        //console.log(followObject)
        dispatch(getUsersThunk(followObject))
        
    }, [])

    console.log('followage is: ')
    console.log(console.log(followage))
    

    const length = followage ? followage.length : 0;
    const mapFollowers = () => {
        if (followage) {
            return followage.map(x => <ProfileTile key={x._id} profile={x} />)
        } else {
            return null;
        }
    } 
    return (
        <div className="">
            <h3>{render} ({length})</h3>
            {mapFollowers()}
        </div>
    )
}

export default Follows;