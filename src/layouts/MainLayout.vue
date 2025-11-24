<script lang="ts" setup>
import { defineComponent } from "vue";
import HeaderView from "@/views/HeaderView.vue";
import CharactersPage from "@/views/CharactersPage.vue";
import EpisodesPage from "@/views/EpisodesPage.vue";
import FilterBar from "@/ui/FilterBar.vue";

defineComponent({
  name: "MainLayout",
});
</script>

<template>
  <div class="main-layout">
    <HeaderView />
    <FilterBar />
    <CharactersPage />
    <EpisodesPage />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  height: 100%;
}
</style>
