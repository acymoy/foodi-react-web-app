import React from "react";
import { Link } from "react-router-dom";

// Component imports
import ProfileTile from "./profile-tile";

import exampleProfiles from '../../data/example-profile.json';

const Follows = () => {

    const profileArray = exampleProfiles

    return (
        <div className="">
            <h3>Following ({profileArray.length})</h3>
            {profileArray.map(x => <ProfileTile key={x._id} profile={x} />)}
        </div>
    )
}

export default Follows;