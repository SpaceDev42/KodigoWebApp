import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Profile from "../components/Profile";

function User() {
   // const user = JSON.parse(localStorage.getItem("user"));
    return (
        <React.Fragment>
            <Navbar />
            <Profile />
        </React.Fragment>

    );
}
export default User;
