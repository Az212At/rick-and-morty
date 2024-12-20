<script setup lang="ts"></script>

<template>
  <div class="home-view">
    <div class="home-view__logo">
      <img src="@/assets/img/logoA.svg" alt="Logo" />
    </div>
    <div class="home-view__content">
      <header class="home-view__header">
        <h1 class="home-view__title">
          Saiba tudo em um só
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

    &-header {
      margin-bottom: 16px;

      &-title {
        font-family: Inter, serif;
        font-size: 72px;
        font-weight: 700;
        line-height: 87.14px;

        &-highlight {
          color: #44c765;
        }
      }
    }

    &-subtitle {
      @include text-inter;
      background-color: #44c765;
      padding: 8px;
    }
  }

  &__details {
    width: 397px;
    margin-top: 16px;

    &-text {
      @include text-inter;
      background-color: #ffffff;
      padding: 8px;
    }
  }

  &__images {
    margin-top: 32px;

    > img {
      width: 773px;
      height: 1080px;
    }
  }
}
</style>
