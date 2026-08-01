<script lang="ts" setup>
import { onUnmounted, watch } from "vue";
import type { PropType } from "vue";
import type { Character } from "@/entities/character/model/types";
import { CharacterStatus } from "@/entities/character/model/types";

import humanIcon from "@/shared/assets/icons/icon-human.svg";
import planetIcon from "@/shared/assets/icons/icon-planet.svg";
import mapPinIcon from "@/shared/assets/icons/map-pin-1.svg";
import queueIcon from "@/shared/assets/icons/queue-1.svg";
import questionIcon from "@/shared/assets/icons/question-1.svg";
import closeIcon from "@/shared/assets/icons/x-circle-1.svg";
import loaderIcon from "@/shared/assets/icons/loader.svg";
import genderMaleIcon from "@/shared/assets/icons/gender-male-1.svg";
import genderFemaleIcon from "@/shared/assets/icons/gender-female-1.svg";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },

  character: {
    type: Object as PropType<Character | null>,
    default: null,
  },

  isLoading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const getStatusColor = (status: CharacterStatus) => {
  const map: Record<CharacterStatus, string> = {
    [CharacterStatus.Alive]: "#9EFF00",
    [CharacterStatus.Dead]: "#FF4E4E",
    [CharacterStatus.Unknown]: "#A0A0A0",
  };
  return map[status] ?? "#A0A0A0";
};

const getGenderIcon = (gender: string) => {
  if (gender === "Male") {
    return genderMaleIcon;
  }
  if (gender === "Female") {
    return genderFemaleIcon;
  }
  return questionIcon;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    emit("close");
  }
};

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeydown);
    } else {
      window.removeEventListener("keydown", handleKeydown);
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="modal-backdrop" @click.self="emit('close')">
        <div class="character-modal">
          <button
            type="button"
            class="character-modal__close"
            @click="emit('close')"
          >
            <img :src="closeIcon" alt="close" />
          </button>

          <div v-if="isLoading" class="character-modal__loading">
            <img :src="loaderIcon" alt="loading" />
          </div>

          <div v-else-if="character" class="character-modal__content">
            <img
              :src="character.image"
              :alt="character.name"
              class="character-modal__image"
            />

            <div class="character-modal__body">
              <h2 class="character-modal__name">{{ character.name }}</h2>

              <div class="character-modal__row">
                <span><img :src="queueIcon" alt="episodes" /></span>
                <p>Participou de {{ character.episode.length }} episódios</p>
              </div>

              <div class="character-modal__badges">
                <div class="character-modal__badge">
                  <span
                    class="character-modal__dot"
                    :style="{ background: getStatusColor(character.status) }"
                  />
                  <p>{{ character.status }}</p>
                </div>

                <div class="character-modal__badge">
                  <img :src="humanIcon" alt="species" />
                  <p>{{ character.species }}</p>
                </div>

                <div class="character-modal__badge">
                  <img :src="getGenderIcon(character.gender)" alt="gender" />
                  <p>{{ character.gender }}</p>
                </div>
              </div>

              <div class="character-modal__cards">
                <div class="character-modal__card">
                  <img :src="planetIcon" alt="planet" />
                  <p class="character-modal__card-label">Planet</p>
                  <p class="character-modal__card-value">
                    {{ character.origin.name }}
                  </p>
                  <button
                    type="button"
                    class="character-modal__more-btn"
                    disabled
                  >
                    <img :src="questionIcon" alt="info" />
                    Saiba mais
                  </button>
                </div>

                <div class="character-modal__card">
                  <img :src="mapPinIcon" alt="location" />
                  <p class="character-modal__card-label">Space station</p>
                  <p class="character-modal__card-value">
                    {{ character.location.name }}
                  </p>
                  <button
                    type="button"
                    class="character-modal__more-btn"
                    disabled
                  >
                    <img :src="questionIcon" alt="info" />
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}

.character-modal {
  position: relative;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  background: #1e1e1e;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;

    img {
      width: 18px;
      height: 18px;
      filter: brightness(0) invert(1);
    }

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  &__content {
    display: flex;
    gap: 32px;

    @media (max-width: 640px) {
      flex-direction: column;
    }
  }

  &__image {
    width: 260px;
    height: 260px;
    border-radius: 16px;
    object-fit: cover;
    border-bottom: 2px solid #333;
  }

  &__body {
    flex: 1;
    color: #fff;
  }

  &__name {
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 24px;
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;

    span {
      width: 16px;
      display: flex;
      justify-content: center;

      img {
        width: 16px;
        height: 16px;
        filter: brightness(0) invert(1);
      }
    }
  }

  &__badges {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  &__badge {
    display: flex;
    align-items: center;
    gap: 6px;

    img {
      width: 16px;
      height: 16px;
      filter: brightness(0) invert(1);
    }
  }

  &__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  &__cards {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  &__card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 16px;
    text-align: center;
    min-width: 160px;

    > img {
      width: 20px;
      height: 20px;
      filter: brightness(0) invert(1);
    }
  }

  &__card-label {
    margin: 4px 0 0;
  }

  &__card-value {
    color: #9effea;
    font-weight: 600;
    margin: 4px 0 12px;
  }

  &__more-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 255, 255, 0.08);
    border: none;
    border-radius: 20px;
    color: #fff;
    padding: 8px 14px;
    cursor: pointer;

    img {
      width: 14px;
      height: 14px;
      filter: brightness(0) invert(1);
    }

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
      }
    }
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-active .character-modal,
.modal-fade-leave-active .character-modal {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .character-modal,
.modal-fade-leave-to .character-modal {
  transform: scale(0.95);
}
</style>