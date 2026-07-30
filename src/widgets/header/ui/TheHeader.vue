<script lang="ts" setup></script>

<template>
  <header class="the-header">
    <div class="the-header__container">
      <div class="the-header__top">
        <img src="@/shared/assets/img/logoA.svg" alt="Логотип" class="the-header__logo" />
      </div>
      <div class="the-header__main">
        <div class="the-header__text">
          <h1 class="the-header__title">
            Всё в одном <span>месте</span>.
          </h1>
          <p class="the-header__subtitle">Персонажи и эпизоды</p>
        </div>
        <div class="the-header__image">
          <img src="@/shared/assets/img/HighlightImageRick.png" alt="Rick" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.the-header {
  padding: 1rem;
  background-color: #000000;
  color: white;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    max-width: 180px;
    height: auto;
  }

  .favorite-btn {
    background-color: #00b5cc;
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 14px;
  }

  &__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    gap: 2rem;
  }

  &__text {
    flex: 1 1 500px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 3rem;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;

    span {
      color: #00b5cc;
    }
  }

  &__subtitle {
    margin-top: 1rem;
    font-size: 1.125rem;
    color: #ccc;
  }

  &__quote {
    margin-top: 1.5rem;
    font-style: italic;
    color: #888;
  }

  &__image {
    flex: 1 1 300px;
    text-align: right;

    img {
      max-width: 700px;
      width: 100%;
      height: auto;
    }
  }
}
</style>
