import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Navbar from "./Navbar";
import { handleChange } from "../services/loginServices";
import "../style/sign-up.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://34.125.6.179:8890/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //credentials: 'include',
      body: JSON.stringify(credentials),
    });
  
    const data = await response.json();
    console.log(data);
  
    if (data) {
      window.localStorage.setItem("token", data.accessToken);
      window.localStorage.setItem("user", JSON.stringify(data));
      navigate("/home");
    } else {
      setErrorMessage("email or password incorrect");
    }
  };

  // if (!(body.length === 0)) {
  //   setMessage(
  //     <span className="text-success text-center">Login successful</span>
  //   );

  // } else {
  //   setMessage(<span className="text-danger text-center">Login failed</span>);
  // }

  const responseGoogle = (response) => {
    if (response.accessToken) {
      localStorage.setItem("token", response.accessToken)
      localStorage.setItem("user", JSON.stringify(response.profileObj));
      navigate("/home");
      console.log(response);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div class="signup-form mt-5">
        <form
          onSubmit={(event) => {
            handleLogin(event);
          }}
        >
          <h1 className="text-center">Log in</h1>
          <div className="text-center pt-3">
            <GoogleLogin
              clientId="685773016099-07nrb489gep4e8513phef2m0pu3rbsr5.apps.googleusercontent.com"
              buttonText="Continue with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="btn text-light"
            />
          </div>
          <div className="div-separator">
            <div className="div-intermediate"></div>
          </div>

          {/* Email starts */}
          <div className="form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email Address"
              value={credentials.email}
              onChange={(event) => {
                handleChange(event, credentials, setCredentials);
              }}
              required="required"
            />
          </div>
          {/* Email ends */}

          {/* Password starts */}
          <div className="form-group">
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(event) => {
                handleChange(event, credentials, setCredentials);
              }}
              required="required"
            />
          </div>
          {/* Password ends */}

          {/* <div className="form-group">
          <label className="form-check-label">
            <input type="checkbox" required="required" /> Remember me
          </label>
          <a href="/" className="forgot-link">
            Forgot Password?
          </a>
        </div> */}

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            onClick={(event) => {
              handleLogin(event);
            }}
          >
            Log in
          </button>
          <span className="text-danger">{errorMessage}</span>
        </form>
        <div class="text-center">
          Don't have an account?
          <Link to="/signup"> Sign up</Link>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
