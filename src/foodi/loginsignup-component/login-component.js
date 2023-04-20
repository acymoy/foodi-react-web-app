import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center">Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="loginEmail">Email address</label>
                            <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="loginPassword">Password</label>
                            <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Login</button>
                    </form>

                    <p className="text-center">
                        Don't have an account? <Link to='/login/signup'>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>

                )
}

                export default Login;