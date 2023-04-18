import React from "react";
// loading logo image
import logo from '../../images/icon.png'

const TopComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src="https://i.imgur.com/eX6NPYt.png" alt="Logo" width="50" height="40" className="d-inline-block align-text-middle"/>
                    Foodi
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto w-75 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Feed</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Post</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto w-50 mb-2 mb-lg-0 justify-content-between">
                        <form className="d-flex " role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary" type="submit">Search</button>
                        </form>
                            <button className="btn btn-secondary" href="#">Login</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopComponent;