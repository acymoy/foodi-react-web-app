import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProfileMenu = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/');
    const active = paths[3];
    const id = paths[2];
    //console.log('id', id)
    //console.log('active', active)
    
    return (
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
                <Link to={`${id}/reviews`} className={`nav-link ${active === undefined || active === 'reviews' ? 'active' : ''}`}>
                    Posts
                </Link>
            </li>
            <li className="nav-item">
                <Link to={`${id}/lists`} className={`nav-link ${active === 'lists' ? 'active' : ''}`}>
                    Lists
                </Link>
            </li>
            <li className="nav-item">
                <Link to={`${id}/followers`} className={`nav-link ${active === 'followers' ? 'active' : ''}`}>
                    Followers
                </Link>
            </li>
            <li className="nav-item">
                <Link to={`${id}/following`} className={`nav-link ${active === 'following' ? 'active' : ''}`}>
                    Following
                </Link>
            </li>
        </ul>
    );
}

export default ProfileMenu;