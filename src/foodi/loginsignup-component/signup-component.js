import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Thunk imports
import { registerThunk } from "../../services/auth-thunks";

// Component imports
import IndividualSignup from "./individual-signup-component";
import RestaurantSignup from "./restaurant-signup-component";


const Signup = () => {
    // state to keep track of the selected option
    const [selectedOption, setSelectedOption] = useState("individual");

    // handles the change in the radio buttons
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // renders the correct form based on the selected option
    const renderContent = () => {
        if (selectedOption === "individual") {
            return <IndividualSignup />;
        } else if (selectedOption === "restaurant") {
            return <RestaurantSignup />;
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center">Sign Up</h1>
                    <div>Which one are you?</div>
                    <div className="form-check pt-2">
                        <input className="form-check-input" type="radio" name="options" id="individual" value='individual' 
                        checked={selectedOption === 'individual'} onChange={handleOptionChange}/>
                        <label className="form-check-label" htmlFor="individual">
                            Individual
                        </label>
                    </div>
                    <div className="form-check pb-3">
                        <input className="form-check-input" type="radio" name="options" id="restaurant" value='restaurant' 
                        checked={selectedOption === 'restaurant'} onChange={handleOptionChange} />
                        <label className="form-check-label" htmlFor="restaurant">
                            Restaurant
                        </label>
                    </div>
                {renderContent()}
                </div>
                <p className="text-center">
                    Don't have an account? <Link to='/login'>Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Signup;