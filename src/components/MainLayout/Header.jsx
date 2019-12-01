import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  console.log("isLoggedIn", isLoggedIn);
  console.log("typeof isLoggedIn", typeof isLoggedIn);
  return (
    <header className="header-section">
      <Link to="/home" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/settings" className="link">
        Settings
      </Link>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="link">
          LOGOUT
        </button>
      ) : (
        <button onClick={handleLogin} className="link">
          LOGIN
        </button>
      )}
    </header>
  );
};

export default Header;
