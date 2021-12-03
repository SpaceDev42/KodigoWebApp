import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import User from "./pages/User";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import EditProfile from "./pages/EditProfile";
import './App.css';

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = "#324154";
  }, []);

  return (
    <div>
      <Router>
        {/* <ProtectedRoute path="/user" element={User} /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
            <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path='/edit-profile' element={
          <PrivateRoute>
`            <EditProfile /> 
          </PrivateRoute>}
           />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
