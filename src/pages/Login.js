import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../_layout/Header";
import { login as formLogin } from "../services/authService";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/user`, {
          withCredentials: true,
        });
        setUser(response.data);
        if (response.data && response.data.username) {
          localStorage.setItem("username", response.data.username);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      }
    };

    fetchUserData();
  }, [apiUrl]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const usernameParam = params.get("username");
    if (usernameParam) {
      localStorage.setItem("username", usernameParam);
      setUser({ username: usernameParam });
      navigate("/");
    } else {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUser({ username: storedUsername });
      }
    }
  }, [location, navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await formLogin(username, password);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", username);
      alert("Logged in successfully");
      navigate("/");
    } catch (error) {
      alert("Error logging in");
    }
  };

  const handleGoogleLogin = () => {
    window.open(`${apiUrl}/auth/google`, "_self");
  };

  const handleLogout = async () => {
    try {
      await axios.get(`${apiUrl}/auth/logout`, {
        withCredentials: true,
      });
      localStorage.removeItem("username");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Error logging out");
    }
  };

  return (
    <div>
      <Header />

      <div className="container1">
        <div className="inner">
          <span> Home {">"} 로그인</span>
        </div>
      </div>
      <div className="login-container">
        <div className="login-box">
          {user ? (
            <div>
              <h2>Welcome, {user.username}</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit" className="login-button">
                  Login
                </button>
              </form>
              <button onClick={handleGoogleLogin}>Login with Google</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
