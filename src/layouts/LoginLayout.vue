<script lang="ts" setup>
import { defineComponent } from "vue";

defineComponent({
  name: "LoginLayout",
});

console.log("login");
</script>

<template>
  <div class="login-layout">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.login-layout {
  height: 100%;
}
</style>
