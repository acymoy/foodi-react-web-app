import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Component imports
import SignupComponent from "./signup-component";
import LoginComponent from "./login-component";


const LoginSignup = () => {
    return (
        <div>
            
            <Routes>
                <Route path='/signup'
                    element={<SignupComponent />} />
                <Route path='/'
                    element={<LoginComponent />} />
            </Routes>
        </div>
    )
}

export default LoginSignup;