import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Profile.css";

function Profile() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("Vladimir");
  const [lastName, setLastName] = useState("Guevara");
  //const [role, setRole] = useState("Developer");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Profile";
    userData();
  }, []);

  const userData = async () => {
    const userLogged = JSON.parse(localStorage.getItem("user"));
    const response = await fetch("http://34.125.6.179:8890/users/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    const user = data.find((user) => user.email === userLogged.email);

    console.log(user);
    setUsername(user.username);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setDescription(
      !user.descriptionText ? "add description" : user.descriptionText
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/edit-profile");
  };

  return (
    <div className="card border-0">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://www.pngarts.com/files/3/Avatar-PNG-Pic.png"
            alt=""
            height="100px"
            width="100px"
            className="rounded-circle"
          />
        </div>
      </div>

      <div className="lower-container">
        <h3>
          {firstName} {lastName}
        </h3>
        <h4>@{username}</h4>
        <br />
        <h3 className="title">About me</h3>
        <h5 className="description-container">{description}</h5>
        <br />
        <button
          type="button"
          className="btn-sm btn-outline-dark rounded-pill"
          onClick={handleSubmit}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
