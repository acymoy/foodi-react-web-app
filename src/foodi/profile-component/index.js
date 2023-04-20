import React from "react";

// Component imports
import ProfileMenu from "./profile-menu";

const ProfilePage = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://via.placeholder.com/200"
            alt="Profile"
            className="img-thumbnail"
          />
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h3>User Name</h3>
              <p>Email: user@example.com</p>
              <p>Location: City, State</p>
              <p>Phone: (123) 456-7890</p>
              <p>
                About Me: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Proin volutpat odio eu sem fermentum auctor. Nullam non
                augue vitae neque bibendum condimentum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className='col-md-2'>
            <ProfileMenu />
        </div>
        <div className="col-md-9">
          <h3>Reviews</h3>
          <div className="card">
            <div className="card-body">
              <h5>Restaurant 1</h5>
              <p>Rating: 4 stars</p>
              <p>
                Review: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Proin volutpat odio eu sem fermentum auctor. Nullam non
                augue vitae neque bibendum condimentum.
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5>Restaurant 2</h5>
              <p>Rating: 5 stars</p>
              <p>
                Review: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Proin volutpat odio eu sem fermentum auctor. Nullam non
                augue vitae neque bibendum condimentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
