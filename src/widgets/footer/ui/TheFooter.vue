<script lang="ts" setup>
defineOptions({
  name: "TheFooter",
});
</script>

<template>
  <footer class="the-footer">
    <div class="the-footer__container">
      <div class="the-footer__logo">
        <img src="@/shared/assets/img/logoA.svg" alt="Logo" class="the-footer__logo" />
      </div>
      <hr />
      <div class="the-footer__info">
        <p class="the-footer__text">2026</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.the-footer {
  margin-top: 80px;
  padding: 40px 0;
  background: #1b1b1b;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  &__container {
    width: 1236px;
    margin: 0 auto;
  }

  &__logo {
    width: 165px;
    height: auto;
  }

  &__text {
  color: #fff;
  text-align: center;
  margin: 0 auto;
  margin-top: 8px;
  }
}
</style>
