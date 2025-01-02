<script setup lang="ts">
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";

defineComponent({
  name: "CharactersView",
});

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string[];
  location: string[];
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const characters = ref<Character[]>([]);
const isLoading = ref(true);
const errorMessage = ref<string | null>(null);

const fetchCharacters = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    characters.value = data.results;
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : "Неизвестная ошибка";
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchCharacters);
</script>

<template>
  <div class="characters-list">
    <h1 class="characters-list_title">Список персонажей</h1>

    <div v-if="isLoading" class="characters-list_loading">Загрузка...</div>

    <div v-else-if="errorMessage" class="characters-list_error">
      Ошибка: {{ errorMessage }}
    </div>

    <ul v-else class="characters-list_container">
      <li
        v-for="character in characters"
        :key="character.id"
        class="characters-list_item"
      >
        <img
          :src="character.image"
          :alt="character.name"
          class="characters-list_image"
        />
        <div class="characters-list_info">
          <h2 class="characters-list_name">{{ character.name }}</h2>
          <p class="characters-list_species">Вид: {{ character.species }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.characters-list {
  width: 1920px;
  height: 2480px;
  top: -240px;
  left: -239px;

  &_title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }

  &_loading,
  &_error {
    text-align: center;
    font-size: 18px;
    color: #777;
  }

  &_container {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.4px;
    justify-items: center;
  }

  &_item {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 294px;
    height: 400px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }

  &_image {
    width: 100%;
    height: auto;
  }

  &_info {
    padding: 10px;

    &_name {
      font-size: 16px;
      margin: 0 0 5px;
    }

    &_species {
      margin: 0;
      color: #666;
      font-size: 14px;
    }
  }
}
</style>
