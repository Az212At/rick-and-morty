<script lang="ts" setup>
import { defineComponent } from "vue";
import HeaderView from "@/views/HeaderView.vue";
import CharactersPage from "@/views/CharactersPage.vue";
import EpisodesPage from "@/views/EpisodesPage.vue";

defineComponent({
  name: "MainLayout",
});

const scrollToSection = (
  section: "characters" | "episodes",
) => {
  document.getElementById(section)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<template>
  <div class="main-layout">
    <HeaderView />
    <FilterBar @scrollTo="scrollToSection" />
    <CharactersPage />
    <EpisodesPage />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  height: 100%;
  background-color: #1f1f1f;
  min-height: 100vh;
}
</style>
