<script lang="ts" setup>
import { defineComponent } from "vue";
import CharactersPage from "@/pages/characters/ui/CharactersPage.vue";
import EpisodesPage from "@/pages/episodes/ui/EpisodesPage.vue";
import TheHeader from "@/widgets/header/ui/TheHeader.vue";
import TheFooter from "@/widgets/footer/ui/TheFooter.vue";

defineComponent({
  name: "MainLayout",
});
</script>

<template>
  <div class="main-layout">
    <TheHeader />
    <CharactersPage />
    <EpisodesPage />
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  height: 100%;
  background-color: #1f1f1f;
  min-height: 100vh;
}
</style>
