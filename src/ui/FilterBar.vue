<script lang="ts" setup>
import { ref } from "vue";
import MainButton from "@/ui/MainButton.vue";

const emit = defineEmits({
  scrollTo: (section: "characters" | "episodes") => true,
});

const search = ref("");

const activeFilter = ref<"characters" | "episodes">("characters");

const setFilter = (value: "characters" | "episodes") => {
  activeFilter.value = value;
  emit("scrollTo", value);
};
</script>

<template>
  <div class="filter-bar">
    <div class="filter-bar__filters">
      <span class="filter-bar__label">Перейти к</span>

      <MainButton
        label="персонажам"
        class="filter-tag"
        :class="{ active: activeFilter === 'characters' }"
        @click="setFilter('characters')"
      />

      <MainButton
        label="эпизодам"
        class="filter-tag"
        :class="{ active: activeFilter === 'episodes' }"
        @click="setFilter('episodes')"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &__search {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .main-input {
      width: 280px;
      background: #1e1e1e;
      border: none;
      border-radius: 30px;
      padding: 10px 18px;
      color: white;

      &::placeholder {
        color: #999;
      }
    }
  }

  &__icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #1e1e1e;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 18px;
      filter: invert(1);
    }
  }

  &__filters {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__label {
    color: #aaa;
    font-size: 0.9rem;
  }
}

/* Стили тегов-фильтров */
.filter-tag {
  background: #2d2d2d !important;
  color: #ccc !important;
  border-radius: 20px !important;
  padding: 6px 16px !important;
  font-size: 14px !important;
  transition: 0.2s;

  &.active {
    background: #00b5cc !important;
    color: #fff !important;
  }
}
</style>
