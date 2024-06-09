import axios from "axios";
export const API_URL =
  "https://evening-anchorage-43403-9beb701402c9.herokuapp.com" ||
  "http://localhost:5000";

export const register = async (username, password, email) => {
  return await axios.post(`${API_URL}/register`, { username, password, email });
};

export const login = async (username, password) => {
  return await axios.post(`${API_URL}/login`, { username, password });
};
