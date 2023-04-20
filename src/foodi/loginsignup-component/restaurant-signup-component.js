import React, { useState } from 'react';

const RestaurantSignup = () => {
    const [formData, setFormData] = useState({
        restaurantName: '',
        email: '',
        password: '',
        openDate: '',
        cuisine: '',
        address: '',
        phoneNumber: '',
        website: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="restaurantName">Restaurant Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="restaurantName"
                    name="restaurantName"
                    placeholder='Enter restaurant name'
                    value={formData.restaurantName}
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
                <label htmlFor="openDate">Open Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="openDate"
                    name="openDate"
                    placeholder='Enter open date'
                    value={formData.openDate}
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
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder='Enter address'
                    value={formData.address}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder='Enter phone number'
                    value={formData.phoneNumber}
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
