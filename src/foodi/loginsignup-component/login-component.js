import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../services/auth-thunks';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            console.log('dispatching loginThunk')
            await dispatch(loginThunk({ username, password }));
            navigate('/profile');
            console.log('navigated??')
        } catch (e) {
            alert(e)
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center">Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="loginEmail">Email address</label>
                            <input type="email" value={username} onChange={(event) => setUsername(event.target.value)} className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="loginPassword">Password</label>
                            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" id="loginPassword" placeholder="Password" />
                        </div>
                        <button type="submit" onClick={handleLogin} className="btn btn-primary mt-2">Login</button>
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