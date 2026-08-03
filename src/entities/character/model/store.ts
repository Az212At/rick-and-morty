import { ref } from "vue";
import { defineStore } from "pinia";
import { Character } from "@/entities/character";
import { getCharacters, getCharacterById  } from "@/entities/character/";

export const useCharactersStore = defineStore("characters", () => {
  const characters = ref<Character[]>([]);
  const isLoading = ref(false);
  const errorMessage = ref("");

  const currentCharacter = ref<Character | null>(null);
  const isCurrentCharacterLoading = ref(false);
  const currentCharacterError = ref("");

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

  const fetchCharacterById = (id: number) => {
    isCurrentCharacterLoading.value = true;
    currentCharacterError.value = "";
    getCharacterById(id)
      .then((response) => {
        currentCharacter.value = response.data;
      })
      .catch(() => {
        currentCharacterError.value = "Ошибка загрузки персонажа";
      })
      .finally(() => {
        isCurrentCharacterLoading.value = false;
      });
  };

  const resetCurrentCharacter = () => {
    currentCharacter.value = null;
  };

  return {
    characters,
    isLoading,
    errorMessage,
    fetchCharacters,

    currentCharacter,
    isCurrentCharacterLoading,
    currentCharacterError,
    fetchCharacterById,
    resetCurrentCharacter,
  };
});
