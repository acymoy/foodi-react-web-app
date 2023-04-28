import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Thunk imports
import {registerThunk} from '../../services/auth-thunks';

const RestaurantSignup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        dob: '',
        location: '',
        following: [],
        followers: [],
        cuisine: '',
        phone: '',
        website: '',
        role: 'RESTAURANT'
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        //console.log('handle change', name, value)
        setFormData({ ...formData, [name]: value });
        //console.log(formData)
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            await dispatch(registerThunk(formData))
            navigate('/profile')
        } catch (e) {
            alert(e)
        }
        
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Restaurant Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder='Enter restaurant name'
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder='Enter account email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="signupPassword">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password" required />
            </div>
            <div className="form-group">
                <label htmlFor="dob">Open Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    placeholder='Enter open date'
                    value={formData.dob}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="cuisine">Cuisine</label>
                <input
                    type="text"
                    className="form-control"
                    id="cuisine"
                    name="cuisine"
                    placeholder='Enter cuisine'
                    value={formData.cuisine}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    placeholder='Enter address'
                    value={formData.location}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder='Enter phone number'
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                    type="text"
                    className="form-control"
                    id="website"
                    name="website"
                    placeholder='Enter website'
                    value={formData.website}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
    );
};

export default RestaurantSignup;
