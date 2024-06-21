import React from "react";
import './Profile.css';
function Profile() {
  return (
    
    <div className="profile">
      <div className="profile-header">
        <img src="https://via.placeholder.com/150" alt="Profile" />
        <div className="profile-body">
        <h2>ProfileInformation</h2>
        <ul>
          <li>Name:</li>
          <li>Email:</li>
          <li>Phone:</li>
          <li>Balanace Amount:</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Profile;