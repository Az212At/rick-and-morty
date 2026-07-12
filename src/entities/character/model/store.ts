import { ref } from "vue";
import { defineStore } from "pinia";
import type { Character } from "@/entities/character/model/types";
import { getCharacters } from "@/entities/character/api";

export const useCharactersStore = defineStore("characters", () => {
  const characters = ref<Character[]>([]);
  const isLoading = ref(false);
  const errorMessage = ref("");

  const fetchCharacters = () => {
    isLoading.value = true;
    errorMessage.value = "";
    getCharacters()
      .then((response) => {
        characters.value = response.data.results;
      })
      .catch(() => {
        errorMessage.value = "Ошибка загрузки персонажей";
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  return {
    characters,
    isLoading,
    errorMessage,
    fetchCharacters,
  };
});
