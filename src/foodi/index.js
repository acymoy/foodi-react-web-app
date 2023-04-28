import { BrowserRouter, Link } from "react-router-dom";
import React from "react";
import { Routes, Route } from 'react-router';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

// MOTD import

// Component imports
import Hello from './hello';
import TopComponent from './top-component';
import HomeComponent from './home-component';
import ArticlesComponent from './articles-component';
import LoginComponent from './loginsignup-component';
import ProfileComponent from './profile-component';
import EditProfileComponent from './edit-profile-component';
import ReviewComponent from './review-component';
import SearchComponent from './search-component';
import DetailComponent from "./details-component";

// Reducer imports
import listReducer from './reducers/list-reducer';
import postReducer from './reducers/post-reducer';
import userReducer from './reducers/user-reducer';
import authReducer from './reducers/auth-reducer';
import placesReducer from "./reducers/places-reducer";


const store = configureStore(
   { reducer: { lists: listReducer, posts: postReducer, profile: userReducer, auth: authReducer, places: placesReducer} }
);

// Loads the Foodi webpage. Imports into index.js in the src folder, which is, in turn, taken by App.js.
// This page should be handling the Routes and the providers, reducers, etc etc. Basically everything.
function Foodi() {
   return (
      <Provider store={store}>
         <div>
            <div className='row'>
               <TopComponent />
            </div>
            <div>
               <Routes>
                  <Route index element={<HomeComponent />} />
                  <Route path='home' element={<HomeComponent />} />
                  <Route path='articles' element={<ArticlesComponent />} />
                  <Route path='login/*' element={<LoginComponent />} />
                  <Route path='profile/*' element={<ProfileComponent />} />
                  <Route path='edit-profile' element={<EditProfileComponent />} />
                  <Route path='review/:rid' element={<ReviewComponent />} />
                  <Route path='search/:query' element={<SearchComponent/>} />
                  <Route path='details/:placeID' element={<DetailComponent/>} />
                  {/*
                  TODO:: Implement the rest of the                 
                  */}
               </Routes>
            </div>
         </div>

      </Provider>


   )
};
export default Foodi;