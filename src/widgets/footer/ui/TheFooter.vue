<script lang="ts" setup>
defineOptions({
  name: "TheFooter",
});
</script>

<template>
  <footer class="the-footer">
    <div class="the-footer__container">
      <div class="the-footer__logo-and-btn">
        <img src="@/assets/img/logoA.svg" alt="Logo" class="the-footer__logo" />
        <button type="button" class="the-footer__btn btn">
          <img src="@/assets/icons/sun.svg" alt="up" class="btn__emoticons" />
          <span class="btn__text">Вернуться наверх</span>
        </button>
      </div>
      <hr />
      <div class="the-footer__info">
        <img
          src="@/assets/icons/sun.svg"
          alt="year"
          class="the-footer__img-year"
        />
        <p class="the-footer__text">2023</p>
        <img
          src="@/assets/icons/caret-left-1.svg"
          alt="arrow"
          class="the-footer__img-arrow"
        />
        <img
          src="@/assets/icons/caret-left-1.svg"
          alt="arrow"
          class="the-footer__img-arrow"
        />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.the-footer {
  &__container {
    width: 1236px;
  }

  &__logo-and-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    width: 165px;
    height: 48px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
