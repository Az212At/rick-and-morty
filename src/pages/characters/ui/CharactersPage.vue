<script lang="ts" setup>
import { onMounted } from "vue";
import CharacterCard from "@/entities/character/ui/CharacterCard.vue";
import { useCharactersStore } from "@/entities/character/model/store";

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
  padding-top: 24px;
  text-align: center;
  color: white;
}

.characters-page__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  justify-content: center;
  gap: 24px;
  padding: 24px;
}

.characters-page__error {
  color: red;
}
</style>
