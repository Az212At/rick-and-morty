<script lang="ts" setup>
import { onMounted } from "vue";
import { useCharactersStore } from "@/entities/character/model/store";
import CharacterCard from "@/entities/character/ui/CharacterCard.vue";
import { useCharacterModal } from "@/features/character-details";
import CharacterDetailModal from "@/features/character-details/ui/CharacterDetailModal.vue";

const charactersStore = useCharactersStore();
const { isOpen, character, isLoading, open, close } = useCharacterModal();

onMounted(() => {
  charactersStore.fetchCharacters();
});
</script>

<template>
  <div class="characters-page">
    <div class="characters-page__list">
      <CharacterCard
        v-for="char in charactersStore.characters"
        :key="char.id"
        :character="char"
        @detailsClick="open"
      />
    </div>

    <CharacterDetailModal
      :is-open="isOpen"
      :character="character"
      :is-loading="isLoading"
      @close="close"
    />
  </div>
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
</style>