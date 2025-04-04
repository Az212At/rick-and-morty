import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  withCredentials: false,
});

export default instance;
