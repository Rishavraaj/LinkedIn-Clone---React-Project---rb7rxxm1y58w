import React from "react";
import "./HomePage.css";
import Navbar from "../navbar/Navbar";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import Post from "../post/Post";
import Rightsidebar from "../rightsidebar/Rightsidebar";

const Homepage = ({ email, password, handleLogout }) => {
  console.log(email);
  return (
    <div className="Homepage_container">
      <Navbar email={email} password={password} handleLogout={handleLogout} />

      <div className="all_sections">
        <LeftSidebar email={email} password={password} />
        <Post email={email} password={password} />
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Homepage;
