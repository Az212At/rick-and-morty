<script lang="ts" setup>
import { defineComponent } from "vue";
import HeaderView from "@/views/HeaderView.vue";

defineComponent({
  name: "MainLayout",
});
</script>

<template>
  <div class="main-layout">
    <RouterView />
    <HeaderView />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  height: 100%;
}
</style>
