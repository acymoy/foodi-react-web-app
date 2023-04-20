import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TopComponent = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];

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
                            <a className={`nav-link ${(active === 'home' || active === '') ? 'active' : ''}`} aria-current="page">Home</a>
                        </Link>
                        <Link to='/feed' className='nav-item'>
                            <a className={`nav-link ${active === 'feed' ? 'active' : ''}`}>My Feed</a>
                        </Link>
                        <Link to='/articles' className='nav-item'>
                            <a className={`nav-link ${active === 'articles' ? 'active' : ''}`}>Articles</a>
                        </Link>
                        <Link to='/profile' className='nav-item'>
                            <a className={`nav-link ${active === 'profile' ? 'active' : ''}`}>Profile</a>
                        </Link>
                        <Link to='/post' className='nav-item'>
                            <a className={`nav-link ${active === 'post' ? 'active' : ''}`}>Post</a>
                        </Link>
                    </ul>
                    <ul className="navbar-nav me-auto w-50 mb-2 mb-lg-0 justify-content-between">
                        <form className="d-flex " role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary" type="submit">Search</button>
                        </form>
                        <Link to='/login' className="btn btn-secondary">Login</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopComponent;