import axios from "axios";
export const API_URL = process.env.REACT_APP_API_URL;

export const register = async (username, password, email) => {
  return await axios.post(`${API_URL}/Register`, { username, password, email });
};

export const login = async (username, password) => {
  return await axios.post(`${API_URL}/Login`, { username, password });
};
