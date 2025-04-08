<script lang="ts" setup>
import type { PropType } from "vue";
import type { Character } from "@/modules/characters-page/types";
import { CharacterStatus } from "@/modules/characters-page/types";

defineProps({
  character: {
    type: Object as PropType<Character>,
    required: true,
  },
});

const getStatusClass = (status: CharacterStatus) => {
  const statusMap: Record<CharacterStatus, string> = {
    [CharacterStatus.Alive]: "character-card__status--alive",
    [CharacterStatus.Dead]: "character-card__status--dead",
    [CharacterStatus.Unknown]: "character-card__status--unknown",
  };
  return statusMap[status] || "character-card__status--unknown";
};
</script>

<template>
  <div class="character-card">
    <img
      :src="character.image"
      :alt="character.name"
      class="character-card__image"
    />
    <h3 class="character-card__name">{{ character.name }}</h3>
    <p class="character-card__status-wrapper">
      <span
        class="character-card__status"
        :class="[getStatusClass(character.status)]"
      />
      {{ character.status }}
    </p>
    <p class="character-card__info">{{ character.species }}</p>
    <p class="character-card__info">{{ character.origin.name }}</p>
  </div>
</template>

<style lang="scss" scoped>
.character-card {
  background-color: #222;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  &__image {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  &__name {
    font-size: 20px;
    margin: 12px 0 8px;
  }

  &__status-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-bottom: 8px;
    font-weight: 500;
  }

  &__status {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    &--alive {
      background-color: #00ff00;
    }

    &--dead {
      background-color: #ff0000;
    }

    &--unknown {
      background-color: #888;
    }
  }

  &__info {
    margin: 4px 0;
    font-size: 14px;
    color: #ccc;
  }
}
</style>
