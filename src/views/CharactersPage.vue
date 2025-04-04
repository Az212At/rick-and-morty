<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "@/package/config/axios";
import type { Character } from "@/modules/characters-page/types";
import CharacterCard from "@/modules/characters-page/components/CharacterCard.vue";
import { getCharacters } from "@/modules/characters-page/api";

const characters = ref<Character[]>([]);
const isLoading = ref(true);
const errorMessage = ref("");

const fetchCharacters = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    characters.value = await getCharacters();
  } catch (error) {
    errorMessage.value = "Ошибка загрузки персонажей";
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchCharacters);
</script>

<template>
  <div class="characters-page">
    <h1>Персонажи</h1>
    <p v-if="isLoading">Загрузка...</p>
    <p v-if="errorMessage" class="error">
      {{ errorMessage }}
    </p>
    <div v-if="!isLoading && !errorMessage" class="characters-list">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<style scoped>
.characters-page {
  text-align: center;
}
.characters-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
}
.error {
  color: red;
}
</style>
