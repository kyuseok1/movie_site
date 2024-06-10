import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const apiUrl =
    process.env.REACT_APP_API_URL ||
    "https://evening-anchorage-43403-9beb701402c9.herokuapp.com";
  console.log("API URL:", apiUrl);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleLogout = async () => {
    try {
      await fetch(`${apiUrl}/auth/logout`, {
        method: "GET",
        credentials: "include",
      });
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      setUsername("");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    console.log("Username State Updated:", username);
  }, [username]);

  return (
    <header>
      <div className={isHovering ? "head hover" : "head"}>
        <div
          className="top"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <nav>
            <ul className="topul">
              <li>
                <Link to="/">Home</Link>
                <ul className="topul2"></ul>
              </li>
              <li>
                <Link to="/Headertv">TV</Link>
                <ul className="topul2">
                  <li>
                    <Link to="/Headertv">인기순</Link>
                  </li>
                  <li>
                    <Link to="/Tvrating">평점순</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Headermovie">Movie</Link>
                <ul className="topul2">
                  <li>
                    <Link to="/Headermovie">인기순</Link>
                  </li>
                  <li>
                    <Link to="/Movierating">평점순</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Search">Search</Link>
                <ul className="topul2"></ul>
              </li>
              <li>
                <Link to="/bookmarks">Bookmarks</Link>
                <ul className="topul2"></ul>
              </li>
            </ul>
          </nav>

          {username ? (
            <div className="menu">
              <span>Welcome, {username}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="menu">
              <button>
                <Link to="/Register">회원가입</Link>
              </button>
              <button>
                <Link to="/Login">로그인</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
