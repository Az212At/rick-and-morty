<script lang="ts" setup="">
defineOptions({
  name: "TheHeader",
});
</script>

<template>
  <header class="the-header">
    <div class="the-header__container">
      <div class="the-header__logo-and-btn">
        <img src="@/assets/img/logoA.svg" alt="Logo" class="the-header__logo" />
        <button type="button" class="the-header__btn btn">
          <img
            src="@/assets/icons/heart-1.svg"
            alt="heart"
            class="btn__emoticons"
          />
          <span class="btn__text">Lista de favoritos</span>
        </button>
      </div>
      <div class="the-header__content">
        <h2 class="the-header__title">
          <span class="the-header__title_white-text">
            Saiba tudo em um só
          </span>
          <span class="the-header__title_blue-text">lugar.</span>
        </h2>
        <p class="the-header__text1">
          Personagens. localizações, episódios e muito mais.
        </p>
        <button type="button" class="the-header__btn btn">
          <img src="@/assets/icons/sun.svg" alt="moon" class="btn__emoticons" />
          <span class="btn__text">Escuro</span>
        </button>
        <button type="button" class="the-header__btn btn">
          <img src="@/assets/icons/sun.svg" alt="sun" class="btn__emoticons" />
          <span class="btn__text">Claro</span>
        </button>
        <p class="the-header__text2">Ai sim, Porr#@%&*</p>
      </div>
      <div class="the-header__img">
        <img
          src="@/assets/img/HighlightImageRick.png"
          class="the-header__img-rick"
          alt="Rick"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.the-header {
  background: var(--black);

  &__container {
    width: 1236px;
  }

  &__logo-and-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    width: 220px;
    height: 64px;
  }

  &__content {
    width: 397px;
  }

  &__title {
    @include h3;
    &_white-text {
      background: var(--whate);
    }
    &_blue-text {
      background: var(--blue);
    }
  }

  &__text1 {
    background: var(--whate);
  }

  &__text2 {
    background: var(--blue);
  }

  &__img {
    width: 774px;
    height: 434px;
  }

  &__img-rick {
    opacity: 0.8;
  }
}

.btn {
  width: 130px;
  height: 32px;
  border-radius: 32px;
  background: var(--blue);
  &__emoticons {
    width: 24px;
    height: 24px;
  }
  &__text {
    @include text-inter;
    color: var(--whate);
  }
}
</style>
