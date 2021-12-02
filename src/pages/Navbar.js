import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar.css";
export default function Sidebar() {

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-color sticky-top">
        <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/home">
              RestaurantSV
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            { user? (
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active text-light" >
                      <Link
                        to="/home"
                        className="nav-link active text-light"
                      >
                        Home
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ">
                      <Link
                        to="/dashboard"
                        className="nav-link active text-light"
                      >
                        Dashboard
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/user" className="nav-link active text-light">
                        Profile
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/" className="nav-link active text-light" onClick={ onLogout }>
                        Log Out
                      </Link>
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2 font-bold"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light btn-sm" type="submit">
                    Search
                  </button>
                </form>
              </>
            ) : (
              <>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page">
                      <Link className="nav-link active text-light" to="/">
                        Log In 
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page">
                      <Link className="nav-link active text-light" to="/signup">
                        Sign Up
                      </Link>
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
