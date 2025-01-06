import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export const fetchCharactersApi = async () => {
  const response = await apiClient.get("/api/character");
  return response.data;
};
