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
  const map: Record<CharacterStatus, string> = {
    [CharacterStatus.Alive]: "#9EFF00",
    [CharacterStatus.Dead]: "#FF4E4E",
    [CharacterStatus.Unknown]: "#A0A0A0",
  };
  return map[status] ?? "#A0A0A0";
};
</script>

<template>
  <div class="character-card">
    <img
      :src="character.image"
      :alt="character.name"
      class="character-card__image"
    />
    <div class="character-card__body">
      <div class="character-card__header">
        <h3 class="character-card__name">{{ character.name }}</h3>
      </div>
      <div class="character-card__row">
        <span><img src="@/assets/icons/icon-status.svg" alt="status" class="icon-status" /></span>
        <p>{{ character.status }}</p>
      </div>
      <div class="character-card__row">
        <span><img src="@/assets/icons/icon-human.svg" alt="human" class="icon-human" /></span>
        <p>{{ character.species }}</p>
      </div>
      <div class="character-card__row">
        <span><img src="@/assets/icons/icon-planet.svg" alt="planet" class="icon-planet" /></span>
        <p>{{ character.origin.name }}</p>
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.character-card {
  background: #1e1e1e;
  border-radius: 14px;
  overflow: hidden;
  width: 240px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;

  &:hover {
  transform: scale(1.04);
  filter: brightness(1.15);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
  }

   &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 2px solid #333;
  }

  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 2px solid #333;
  }

  &__body {
    padding: 14px;
    color: #fff;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  &__name {
    font-size: 18px;
    font-weight: 600;
  }

  &__fav-btn {
    background: transparent;
    border: none;
    font-size: 22px;
    cursor: pointer;
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    margin-bottom: 6px;

    span {
      width: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  &__more-btn {
    margin-top: 10px;
    width: 100%;
    background: transparent;
    border: none;
    color: #bbb;
    font-size: 14px;
    padding: 6px 0;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      color: #fff;
    }
  }
}
</style>
