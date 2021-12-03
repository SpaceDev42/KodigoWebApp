import React from "react";
import Navbar from "./Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <React.Fragment>
        <Navbar />
        <Header className="masthead" />
        <Footer  />      
    </React.Fragment>
  );
}

export default Home;
