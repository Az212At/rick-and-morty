import axios from "@/package/config/axios";
import { Character } from "@/modules/characters-page/types";

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    return response.data.results;
  } catch (error) {
    console.error("Ошибка загрузки персонажей:", error);
    return [];
  }
};
