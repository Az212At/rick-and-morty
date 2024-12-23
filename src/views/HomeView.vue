<script setup lang="ts"></script>

<template>
  <div class="home-view">
    <div class="home-view__logo">
      <img src="@/assets/img/logoA.svg" alt="Logo" />
    </div>
    <div class="home-view__content">
      <header class="home-view__header">
        <h1 class="home-view__title">
          <span class="home-view__title-white">Saiba tudo em um só</span>
          <span class="home-view__title-highlight">lugar.</span>
        </h1>
      </header>
      <p class="home-view__subtitle">Wubba Lubba Dub Dub!</p>
    </div>
    <div class="home-view__details">
      <p class="home-view__details-text">
        Personagens, localizações, episódios e muito mais.
      </p>
    </div>
    <div class="home-view__images">
      <img src="@/assets/img/HighlightImageRick.png" alt="Rick Image" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";

.home-view {
  width: 1920px;
  height: 1080px;
  background-color: black;

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
    position: absolute;
    top: 399px;
    left: 210px;

    &__header {
      margin-bottom: 16px;

      &__title {
        font-family: Inter, serif;
        font-size: 72px;
        font-weight: 700;
        line-height: 87.14px;
      }

      &__title-white {
        color: #ffffff;
      }

      &__title-highlight {
        color: #0000ff;
      }
    }

    &__subtitle {
      padding: 8px;
      font-family: Inter, sans-serif;
      font-size: 18px;
      line-height: 22px;
      font-weight: 400;
      color: #44c765;
    }
  }

  &__details {
    width: 397px;
    height: 84px;
    top: 884px;
    left: 210px;
    position: absolute;

    &-text {
      @include text-inter;
      color: #ffffff;
      padding: 8px;
    }
  }

  &__images {
    left: 897px;
    position: absolute;

    > img {
      width: 773px;
      height: 1080px;
      opacity: 80%;
    }
  }
}
</style>
