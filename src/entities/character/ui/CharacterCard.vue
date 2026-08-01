<script lang="ts" setup>
import type { PropType } from "vue";
import type { Character } from "@/entities/character/model/types";

import statusIcon from "@/shared/assets/icons/icon-status.svg";
import humanIcon from "@/shared/assets/icons/icon-human.svg";
import planetIcon from "@/shared/assets/icons/icon-planet.svg";
import infoIcon from "@/shared/assets/icons/icon-info.svg";

defineProps({
  character: {
    type: Object as PropType<Character>,
    required: true,
  },
});

const emit = defineEmits(["detailsClick"]);
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
        <span>
          <img :src="statusIcon" alt="status" class="icon-status" />
        </span>
        <p>{{ character.status }}</p>
      </div>

      <div class="character-card__row">
        <span>
          <img :src="humanIcon" alt="human" class="icon-human" />
        </span>
        <p>{{ character.species }}</p>
      </div>

      <div class="character-card__row">
        <span>
          <img :src="planetIcon" alt="planet" class="icon-planet" />
        </span>
        <p>{{ character.origin.name }}</p>
      </div>

      <div class="character-card__footer">
        <button
          type="button"
          class="character-card__more-btn"
          @click="emit('detailsClick', character.id)"
        >
          <img :src="infoIcon" alt="info" />
          Saiba Mais
        </button>
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

  &__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
  }

  &__more-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 255, 255, 0.08);
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    padding: 8px 14px;
    cursor: pointer;
    white-space: nowrap;

    img {
      width: 14px;
      height: 14px;
    }

    transition:
      background 0.2s ease,
      color 0.2s ease;

    &:hover {
      background: #0080ff;
      color: #fff;
    }

    &:active {
      background: #0060c0;
    }
  }
}
</style>