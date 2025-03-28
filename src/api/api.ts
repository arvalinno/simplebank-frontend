import axios from "axios";

//TODO:
const API_BASE_URL = "http://arva888.xyz:8080"; // Replace with your backend URL 

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});