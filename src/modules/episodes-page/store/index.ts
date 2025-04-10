import { ref } from "vue";
import { defineStore } from "pinia";
import type { Episode } from "@/modules/episodes-page/types";
import { getEpisodes } from "@/modules/episodes-page/api";

export const useEpisodesStore = defineStore("episodes", () => {
  const episodes = ref<Episode[]>([]);
  const isLoading = ref(false);
  const errorMessage = ref("");
  const currentPage = ref(1);
  const totalPages = ref(1);

  const fetchEpisodes = async (page = 1) => {
    isLoading.value = true;
    errorMessage.value = "";

    try {
      const response = await getEpisodes(page);
      episodes.value = response.data.results;
      currentPage.value = page;
      totalPages.value = response.data.info.pages;
    } catch (error) {
      errorMessage.value = "Ошибка загрузки эпизодов";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    episodes,
    isLoading,
    errorMessage,
    currentPage,
    totalPages,
    fetchEpisodes,
  };
});
