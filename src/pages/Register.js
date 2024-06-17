import React, { useState } from "react";
import { register } from "../services/authService";
import Header from "../_layout/Header";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, password, email);
      alert("User registered successfully");
      navigate("/Login");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <>
      <Header />
      <div className="container1">
        <div class="inner">
          <span> Home {">"} 회원가입</span>
        </div>
      </div>
      <div class="login-container">
        <div class="login-box">
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
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
