<script lang="ts" setup>
import type { PropType } from "vue";
import type { Episode } from "@/entities/episode/model/types";

defineProps({
  episode: {
    type: Object as PropType<Episode>,
    required: true,
  },
});
</script>

<template>
  <div class="episode-card">
    <h3 class="episode-card__name">{{ episode.name }}</h3>
    <p class="episode-card__code">{{ episode.episode }}</p>
    <p class="episode-card__date">{{ episode.air_date }}</p>
  </div>
</template>

<style scoped lang="scss">
.episode-card {
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

  &__name {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 600;
  }

  &__code {
    font-size: 14px;
    color: #bbb;
    margin-bottom: 4px;
  }

  &__date {
    font-size: 13px;
    color: #888;
  }
}
</style>
