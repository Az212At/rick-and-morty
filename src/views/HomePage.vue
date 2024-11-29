<script setup lang="ts"></script>

<template>
  <div class="logo-a">
    <img src="@/assets/img/logoA.svg" alt="#" />
  </div>
  <template class="template1">
    <header>
      <h1>Saiba tudo em um só <span>lugar.</span></h1>
    </header>
    <p>Wubba Lubba Dub Dub!</p>
  </template>
  <template class="template2">
    <p>Personagens. localizações, episódios e muito mais.</p>
  </template>
  <div class="rick-images">
    <img src="@/assets/img/HighlightImageRick.svg" alt="#" />
  </div>
</template>

<style lang="scss" scoped>
.logo-a {
  width: 397px;
  height: 115.72px;
  top: 112px;
  left: 210px;
  gap: 0;
  opacity: 0;
}

.template1 {
  width: 539px;
  height: 314px;
  top: 399px;
  left: 210px;
  gap: 0;
  opacity: 0;
  h1 {
    font-family: Inter;
    font-size: 72px;
    font-weight: 700;
    line-height: 87.14px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    span {
      font-family: Inter;
      font-size: 72px;
      font-weight: 700;
      line-height: 87.14px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }
  }
  p {
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    background: #44c765;
  }
}

.template2 {
  width: 397px;
  height: 84px;
  top: 884px;
  left: 210px;
  gap: 0;
  opacity: 0;
  p {
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    background: #ffffff;
  }
}

.rick-images {
  width: 773px;
  height: 1080px;
  left: 897px;
  gap: 0;
  opacity: 0;
}
</style>
