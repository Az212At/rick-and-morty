<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import MainInput from "@/ui/MainInput.vue";
import MainButton from "@/ui/MainButton.vue";

const email = ref("");
const password = ref("");
const router = useRouter();

const validateForm = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email.value);
  const isPasswordValid = password.value.trim().length >= 8;
  return isEmailValid && isPasswordValid;
});

const login = () => {
  if (validateForm.value) {
    localStorage.setItem("email", email.value);
    router.push({ name: "HomeView" });
  }
};
</script>

<template>
  <div class="login-view">
    <form class="login-view__form" @submit.prevent="login">
      <MainInput v-model="email" placeholder="Введите почту" type="email" />
      <MainInput
        v-model="password"
        placeholder="Введите пароль"
        type="password"
      />
      <MainButton :disabled="!validateForm" type="submit" label="Войти" />
    </form>
  </div>
</template>

<style scoped lang="scss">
.login-view {
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
