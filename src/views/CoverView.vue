<script setup lang="ts"></script>

<template>
  <div class="cover-view">
    <div class="cover-view__logo">
      <img src="@/assets/img/logoA.svg" alt="Logo" />
    </div>
    <div class="cover-view__content">
      <header class="cover-view__header">
        <h1 class="cover-view__title">
          <span class="cover-view__title-white">Saiba tudo em um só</span>
          <span class="cover-view__title-highlight">lugar.</span>
        </h1>
      </header>
      <p class="cover-view__subtitle">Wubba Lubba Dub Dub!</p>
    </div>
    <div class="cover-view__details">
      <p class="home-view__details__text">
        Personagens, localizações, episódios e muito mais.
      </p>
    </div>
    <div class="cover-view__images">
      <img src="@/assets/img/HighlightImageRick.png" alt="Rick Image" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.cover-view {
  width: 1920px;
  height: 1080px;
  background-color: var(--black);

  &__logo {
    > img {
      width: 397px;
      height: 115.72px;
      position: absolute;
      top: 112px;
      left: 210px;
    }
  }

  &__content {
    width: 539px;
    height: 314px;
    top: 399px;
    left: 210px;
  }

  &__header {
    margin-bottom: 16px;
  }

  &__title {
    @include h1;
  }

  &__title-white {
    color: var(--whate);
  }

  &__title-highlight {
    color: var(--blue);
  }

  &__subtitle {
    @include p;
  }

  &__details {
    width: 397px;
    height: 84px;
    top: 884px;
    left: 210px;

    &__text {
      @include text-inter;
      color: var(--whate);
      padding: 8px;
    }
  }

  &__images {
    left: 897px;

    > img {
      width: 773px;
      height: 1080px;
      opacity: 80%;
    }
  }
}
</style>
