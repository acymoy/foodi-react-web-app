import { BrowserRouter, Link } from "react-router-dom";
import React from "react";
import { Routes, Route } from 'react-router';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

// MOTD import

// Component imports
import Hello from './hello';
import TopComponent from './top-component';
import FeaturedComponent from "./featured-component";
import FeedComponent from "./feed-component";
import HomeComponent from './home-component';
import ArticlesComponent from './articles-component';
import LoginComponent from './loginsignup-component';
import ProfileComponent from './profile-component';


//const store = configureStore(
//   { reducer: { who: whoReducer, tuits: tuitsReducer, profile: profileReducer, posts: postsReducer, tuitsData: tuitsReducer } }
//);

// Loads the Foodi webpage. Imports into index.js in the src folder, which is, in turn, taken by App.js.
// This page should be handling the Routes and the providers, reducers, etc etc. Basically everything.
function Foodi() {
   return (
      //<Provider store={store}>
      <div>
         <div className='row'>
            <TopComponent />
         </div>
         <div>
            <Routes>
               <Route index element={<HomeComponent />} />
               <Route path='home' element={<HomeComponent />} />
               <Route path = 'articles' element={<ArticlesComponent />} />
               <Route path = 'login/*' element={<LoginComponent />} />
               <Route path = 'profile/*' element={<ProfileComponent />} />
               {/*
               TODO:: Implement the rest of the routes
               
               <Route path = 'post' element={<PostComponent />} />
               <Route path = 'edit-profile' element={<EditProfileComponent />} />
               */}
            </Routes>
         </div>
      </div>

      //</Provider>


   )
};
export default Foodi;