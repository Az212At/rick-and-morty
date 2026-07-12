<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  type: {
    type: String as () => "button" | "submit" | "reset",
    default: "button",
  },
});
</script>

<template>
  <button class="main-button" :type="type" :disabled="disabled">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.main-button {
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:enabled {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
}
</style>
