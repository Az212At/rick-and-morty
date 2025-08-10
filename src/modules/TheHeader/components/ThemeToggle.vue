<script lang="ts" setup>
import MainButton from "@/ui/MainButton.vue";
</script>

<template>
  <div class="theme-toggle">
    <MainButton label="Тёмная тема" />
    <MainButton label="Светлая тема" />
  </div>
</template>

<style lang="scss" scoped>
.theme-toggle {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;

  .theme-btn {
    background-color: #222;
    border-radius: 20px;
    padding: 6px 14px;
    font-size: 14px;
  }
}
</style>
