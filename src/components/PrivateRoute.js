import React from "react";
import { Navigate } from "react-router-dom";
import { isAuth } from "../services/loginServices";

function PrivateRoute({ children }) {
  return isAuth() ? children : <Navigate to="/" />;
}

export default PrivateRoute;
