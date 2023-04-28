import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


// Thunk Imports
import { logoutThunk } from "../../services/auth-thunks";

const TopComponent = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {currentUser} = useSelector((state) => state.auth);

    const [ search, setSearch ] = useState('');
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log('searching: ' + search)
        navigate(`/search/${search}`)
    }

    const logout = () => {
        dispatch(logoutThunk());
        navigate('/home');
    }
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">
                <Link to='/home' className="navbar-brand">
                    <img src="https://i.imgur.com/eX6NPYt.png" alt="Logo" width="50" height="40" className="d-inline-block align-text-middle" />
                    Foodi
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto w-75 mb-2 mb-lg-0">
                        <Link to='/home' className='nav-item'>
                            <div className={`nav-link ${(active === 'home' || active === '') ? 'active' : ''}`} aria-current="page">Home</div>
                        </Link>
                        <Link to='/articles' className='nav-item'>
                            <div className={`nav-link ${active === 'articles' ? 'active' : ''}`}>Articles</div>
                        </Link>
                        {currentUser && <Link to='/profile' className='nav-item'>
                            <div className={`nav-link ${active === 'profile' ? 'active' : ''}`}>Profile</div>
                        </Link>}
                    </ul>
                    <ul className="navbar-nav me-auto w-50 mb-2 mb-lg-0 justify-content-between">
                        <form className="d-flex " role="search">
                            <input className="form-control me-2" type="search" onChange={handleSearchChange} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary" onClick={handleSearch} type="submit">Search</button>
                        </form>
                        {!currentUser && <Link to='/login' className="btn btn-secondary">Login</Link>}
                        {currentUser && <button onClick ={logout} className="btn btn-secondary">Logout</button>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopComponent;