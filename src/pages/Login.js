import React, { useState } from "react";
import { login } from "../services/authService";
import Header from "../_layout/Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", username); // 유저네임 local storage 저장
      alert("Logged in successfully");
      navigate("/");
    } catch (error) {
      alert("Error logging in");
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container1">
        <div className="inner">
          <span> Home {">"} 로그인</span>
        </div>
      </div>
      <div className="login-container">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
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
        </div>
      </div>
    </>
  );
};

export default Login;
