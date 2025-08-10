<script lang="ts" setup>
import ThemeToggle from "@/modules/TheHeader/components/ThemeToggle.vue";
import MainButton from "@/ui/MainButton.vue";
</script>

<template>
  <header class="the-header">
    <div class="container">
      <div class="the-header__top">
        <img src="@/assets/logo.svg" alt="Логотип" class="logo" />
        <MainButton label="Избранное" class="favorite-btn" />
      </div>

      <div class="the-header__content">
        <div class="the-header__text">
          <h1>Saiba tudo em um só <span>lugar</span>.</h1>
          <p>Personagens, localizações, episódios e muito mais.</p>
          <ThemeToggle />
          <p class="quote">Ah sim, Porr@#$&*</p>
        </div>
      </div>

      <div class="the-header__image">
        <img src="@/assets/img/HighlightImageRick.png" alt="Rick" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.the-header {
  padding: 2rem;
  background: black;
  color: white;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 40px;
    }

    .favorite-btn {
      background-color: #00b5cc;
      border-radius: 20px;
      padding: 8px 16px;
      font-size: 14px;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    flex-wrap: wrap;
  }

  &__text {
    flex: 1 1 500px;
    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      line-height: 1.2;
      span {
        color: #00b5cc;
      }
    }

    .subtitle {
      margin-top: 1rem;
      font-size: 1.125rem;
      color: #ccc;
    }

    .quote {
      margin-top: 1.5rem;
      font-style: italic;
      color: #888;
    }
  }

  &__image {
    flex: 1 1 300px;
    text-align: right;

    img {
      max-width: 350px;
      width: 100%;
      height: auto;
    }
  }
}
</style>
