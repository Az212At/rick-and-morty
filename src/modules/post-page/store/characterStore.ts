import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchCharactersApi } from "@/modules/post-page/api/characterApi";

export const useCharacterStore = defineStore("characterStore", () => {
  const characters = ref([]);
  const isLoading = ref(false);
  const errorMessage = ref<string | null>(null);

  const fetchCharacters = async () => {
    isLoading.value = true;
    errorMessage.value = null;
    try {
      const data = await fetchCharactersApi();
      characters.value = data.results;
    } catch (error) {
      errorMessage.value =
        error instanceof Error ? error.message : "Неизвестная ошибка";
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
