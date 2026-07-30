<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    default: "",
  },

  type: {
    type: String,
    default: "text",
  },
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <input
    class="main-input"
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    @input="onInput"
  />
</template>

<style scoped lang="scss">
.main-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fff;
  color: #000;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
}
</style>
