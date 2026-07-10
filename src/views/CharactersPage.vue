<script lang="ts" setup>
import { onMounted } from "vue";
import CharacterCard from "@/modules/characters-page/components/CharacterCard.vue";
import { useCharactersStore } from "@/modules/characters-page/store";

const store = useCharactersStore();

onMounted(() => {
  store.fetchCharacters();
});
</script>

<template>
  <section id="characters">
    <div class="characters-page">
      <div class="characters-page__container">
        <h1>Персонажи</h1>
        <p v-if="store.isLoading">Загрузка...</p>
        <p v-if="store.errorMessage" class="characters-page__error">
          {{ store.errorMessage }}
        </p>
        <div
          v-if="!store.isLoading && !store.errorMessage"
          class="characters-page__list"
        >
          <CharacterCard
            v-for="character in store.characters"
            :key="character.id"
            :character="character"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.characters-page {
  text-align: center;
  color: white;
}

.characters-page__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
}

.characters-page__error {
  color: red;
}
</style>
