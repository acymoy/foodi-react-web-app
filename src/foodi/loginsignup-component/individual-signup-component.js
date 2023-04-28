import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Thunk imports
import { registerThunk } from '../../services/auth-thunks';

/*
This version of the sign-up page includes additional form fields for date of birth and location, 
    as well as a checkbox for users to indicate whether they are a restaurant or not. 
    The form data is managed using the formData state variable, and the handleFormChange function 
    is called whenever a form field is changed to update the state. 
    When the form is submitted, the handleSubmit function is called, 
    which logs the form data to the console
*/
const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        dob: '',
        location: '',
        website: '',
        phone: '',
        following: [],
        followers: [],
        cuisine: '',
        role: 'INDIVIDUAL'
    });

    const handleFormChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            await dispatch(registerThunk(formData))
            navigate('/profile')
        } catch (e) {
            alert(e)
        }
        event.preventDefault();
        console.log(formData);
    };

    const [isUserType, setUserType] = useState(true);

    const toggleUserType = () => {
        setUserType(!isUserType);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="signupName">Name</label>
                    <input type="text" className="form-control" id="signupName" name="name" value={formData.name} onChange={handleFormChange} placeholder="Enter name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="signupEmail">Email address</label>
                    <input type="email" className="form-control" id="signupEmail" name="email" value={formData.email} onChange={handleFormChange} aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="signupPassword">Password</label>
                    <input type="password" className="form-control" id="signupPassword" name="password" value={formData.password} onChange={handleFormChange} placeholder="Password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="signupDob">Date of Birth</label>
                    <input type="date" className="form-control" id="signupDob" name="dob" value={formData.dob} onChange={handleFormChange} required />
                </div>
                <div className="form-group pb-3">
                    <label htmlFor="signupLocation">Location</label>
                    <input type="text" className="form-control" id="signupLocation" name="location" value={formData.location} onChange={handleFormChange} placeholder="Enter location" required />
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;