import axios from "axios";

const RickAndMortyAPI = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default RickAndMortyAPI;