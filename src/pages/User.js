import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function User() {
   // const user = JSON.parse(localStorage.getItem("user"));
    return (
        <React.Fragment>
            <Navbar />'user'
            <div className="profile-container">
                <h1 className="text center">if you are here you are aunthenticated</h1>
            </div>
        </React.Fragment>

    );
}
export default User;
