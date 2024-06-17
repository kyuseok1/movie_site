import axios from "axios";
const API_URL = "https://evening-anchorage-43403-9beb701402c9.herokuapp.com";
//https://evening-anchorage-43403-9beb701402c9.herokuapp.com
//"http://localhost:5000"

export const register = async (username, password, email) => {
  return await axios.post(`${API_URL}/Register`, { username, password, email });
};

export const login = async (username, password) => {
  return await axios.post(`${API_URL}/Login`, { username, password });
};
