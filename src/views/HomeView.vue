<script setup lang="ts"></script>

<template>
  <div class="home-view">
    <div class="logo-a">
      <img src="@/assets/img/logoA.svg" alt="#" />
    </div>
    <div class="template1">
      <header>
        <h1>Saiba tudo em um só <span>lugar.</span></h1>
      </header>
      <p>Wubba Lubba Dub Dub!</p>
    </div>
    <div class="details-info">
      <p>Personagens. localizações, episódios e muito mais.</p>
    </div>
    <div class="rick-images">
      <img src="@/assets/img/HighlightImageRick.png" alt="#" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";

.home-view {
  .logo-a {
    > img {
      width: 397px;
      height: 115.72px;
      top: 112px;
      left: 210px;
      gap: 0;
    }
  }

  .template1 {
    width: 539px;
    height: 314px;
    top: 399px;
    left: 210px;
    gap: 0;
    > header > h1 {
      font-family: Inter, serif;
      font-size: 72px;
      font-weight: 700;
      line-height: 87.14px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      > span {
        font-family: Inter, serif;
        font-size: 72px;
        font-weight: 700;
        line-height: 87.14px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
      }
    }
    > p {
      @include text-inter;
      background: #44c765;
    }
  }

  .details-info {
    width: 397px;
    > p {
      @include text-inter;
      background: #ffffff;
    }
  }

  .rick-images {
    > img {
      width: 773px;
      height: 1080px;
    }
  }
}
</style>
