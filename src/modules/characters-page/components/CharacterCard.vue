<script lang="ts" setup>
import type { PropType } from "vue";
import type { Character } from "@/modules/characters-page/types";

defineProps({
  character: {
    type: Object as PropType<Character>,
    required: true,
  },
});

const getStatusClass = (status: string) => {
  const statusMap: Record<string, string> = {
    Alive: "status-alive",
    Dead: "status-dead",
    unknown: "status-unknown",
  };
  return statusMap[status] || "status-unknown";
};
</script>

<template>
  <div class="character-card">
    <img :src="character.image" :alt="character.name" />
    <h3>{{ character.name }}</h3>
    <p>
      <span :class="getStatusClass(character.status)"></span>
      {{ character.status }}
    </p>
    <p>{{ character.species }}</p>
    <p>{{ character.origin.name }}</p>
  </div>
</template>

<style scoped>
.character-card {
  background: #222;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  color: white;
}
img {
  width: 100%;
  border-radius: 8px;
}
.status-alive {
  color: green;
}
.status-dead {
  color: red;
}
.status-unknown {
  color: gray;
}
</style>
