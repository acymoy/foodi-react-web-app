import { BrowserRouter, Link } from "react-router-dom";
import React from "react";
import { Routes, Route } from 'react-router';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

// Component imports
import Hello from '../hello';
import TopComponent from './top-component';

//const store = configureStore(
//   { reducer: { who: whoReducer, tuits: tuitsReducer, profile: profileReducer, posts: postsReducer, tuitsData: tuitsReducer } }
//);

// Loads the Foodi webpage. Imports into index.js in the src folder, which is, in turn, taken by App.js.
// This page should be handling the Routes and the providers, reducers, etc etc. Basically everything.
function Foodi() {
   return (
      //<Provider store={store}>
      <div>
        <div className = 'row'>
            <TopComponent/>
        </div>
        {/*
        <div className="row mt-2">
            <div className="col-10 col-lg-7 col-xl-6">
               <Routes>
                  <Route index element={<HomeComponent />} />
                  <Route path='home' element={<HomeComponent />} />
                  <Route path='explore' element={<ExploreComponent />} />
                  <Route path='profile' element={<ProfileComponent />} />
                  <Route path='edit-profile' element={<EditProfileComponent />} />
               </Routes>
            </div>

            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-3">
               <Hello />
            </div>
        </div>
        */  }
        
         
        
         
      </div>
         
      //</Provider>


   )
};
export default Foodi;