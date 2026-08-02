<script lang="ts" setup>
import { onMounted } from "vue";
import { useEpisodesStore } from "@/entities/episode/model/store";
import EpisodeCard from "@/entities/episode/ui/EpisodeCard.vue";

const store = useEpisodesStore();

onMounted(() => {
  store.fetchEpisodes();
});
</script>

<template>
  <section id="episodes">
    <div class="episodes-page">
      <h1>Эпизоды</h1>
      <p v-if="store.isLoading">Загрузка...</p>
      <p v-if="store.errorMessage" class="episodes-page__error">
        {{ store.errorMessage }}
      </p>
      <div
        v-if="!store.isLoading && !store.errorMessage"
        class="episodes-page__list"
      >
        <EpisodeCard
          v-for="episode in store.episodes"
          :key="episode.id"
          :episode="episode"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.episodes-page {
  text-align: center;
  color: white;
}

.episodes-page__error {
  color: red;
}

.episodes-page__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
  padding-top: 24px;
  padding-right: 16px;
  padding-bottom: 0;
  padding-left: 16px;
}

.episodes-page__pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.episodes-page__pagination button {
  border: 1px solid #00bcd4;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: transparent;
  color: white;
  cursor: pointer;
}

.episodes-page__pagination button.active {
  background-color: #00bcd4;
  color: black;
}
</style>
