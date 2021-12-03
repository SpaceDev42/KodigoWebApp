import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Profile.css";
import Navbar from "./Navbar";
import { handleChange } from "../services/loginServices";

function EditProfile() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastname: "",
    username: "",
    descriptionText: "",
  });

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://34.125.6.179:8890/users/update/${user.id}`, 
        { 
        method: "PUT", 
        body: JSON.stringify(profile), 
        headers: { "Content-Type": "application/json" } 
        });
        const data = await response.json();
        console.log(data);
        navigate("/profile");
    }

  return (
    <React.Fragment>
      <Navbar />
      <div className="card mx-center">
        <h1 className="title text-center">Edit Profile</h1>
        <div className="div-separator">
          <div className="div-intermediate"></div>
        </div>
        <div class="form-group ml-4 mr-4">
          <label for="firstName">Username </label>
          <br />
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Username"
            value={profile.username}
            onChange={(event) => {
              handleChange(event, profile, setProfile);
            }}
            required="required"
          />
        </div>
        <div class="form-group ml-4 mr-4">
          <label for="firstName">First Name </label>
          <br />
          <input
            type="text"
            class="form-control"
            name="firstName"
            placeholder="Enter First Name"
            value={profile.firstName}
            onChange={(event) => {
              handleChange(event, profile, setProfile);
            }}
            required="required"
          />
        </div>

        <div class="form-group ml-4 mr-4">
          <label for="lastName">Last Name </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Enter Last Name"
            value={profile.lastname}
            onChange={(event) => {
              handleChange(event, profile, setProfile);
            }}
            required="required"
          />
        </div>
        <div class="form-group ml-4 mr-4">
          <label for="description" className=" mr-4">
            Description
          </label>
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            name="description"
            rows="2"
            placeholder="Enter Description"
            value={profile.description}
            onChange={(event) => {
                handleChange(event, profile, setProfile);
            }}
          ></textarea>
        </div>
        <div className="mx-auto">
        <button
          type="button"
          className="btn-sm btn-outline-dark rounded-pill"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditProfile;
