import React, { useState } from "react";
import "./login.css";
import logo from "../Assets/logo.png";
import user from "../../user";
import Homepage from "../HomePage/Homepage";

const Login = () => {
  const [userdata, setUserdata] = useState("");
  const [userpass, setUserpass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "true"
  );

  function checkCredentials(email, password) {
    for (let i = 0; i < user.length; i++) {
      if (user[i].email === email && user[i].password === password) {
        return true;
      }
    }
    return false;
  }
  const handleLogin = (e) => {
    e.preventDefault();
    if (checkCredentials(userdata, userpass)) {
      sessionStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
      // console.log("sucess");
    }
  };

  const handleLogout = () => {
    sessionStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <Homepage
        email={userdata}
        password={userpass}
        handleLogout={handleLogout}
      />
    );
  } else {
    return (
      <div className="login_container">
        <div className="login_header">
          <div className="login_logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="loginForm_container">
          <div className="signIn">
            <h1>Sign in</h1>
            <p>Stay updated on your professional world</p>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Email or Phone"
                value={userdata}
                onChange={(e) => setUserdata(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={userpass}
                onChange={(e) => setUserpass(e.target.value)}
              />
              <button>Sign in</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};
export default Login;
