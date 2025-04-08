import { ref } from "vue";
import { defineStore } from "pinia";
import type { Character } from "@/modules/characters-page/types";
import { getCharacters } from "@/modules/characters-page/api";

export const useCharactersStore = defineStore("characters", () => {
  const characters = ref<Character[]>([]);
  const isLoading = ref(false);
  const errorMessage = ref("");

  const fetchCharacters = async () => {
    isLoading.value = true;
    errorMessage.value = "";

    try {
      const response = await getCharacters();
      characters.value = response.data.results;
    } catch (error) {
      errorMessage.value = "Ошибка загрузки персонажей";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    characters,
    isLoading,
    errorMessage,
    fetchCharacters,
  };
});
