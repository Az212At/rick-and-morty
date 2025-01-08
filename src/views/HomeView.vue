<script setup lang="ts">
import { defineOptions } from "vue";
import { ref, onMounted } from "vue";
import { ICharacter } from "@/modules/post-page/types/characters";
import { useCharacterStore } from "@/modules/post-page/store/characterStore";

defineOptions({
  name: "HomeView",
});

const characters = ref<ICharacter[]>([]);
const characterStore = useCharacterStore();

onMounted(() => {
  characterStore.fetchCharacters();
});
</script>

<template>
  <div class="home-view">
    <header class="header">
      <img src="@/assets/img/logoA.svg" alt="Logo" class="header__logo" />
      <button type="button" class="header__btn btn">
        <img
          src="@/assets/icons/heart-1.svg"
          alt="heart"
          class="btn__emoticons"
        />
        <span class="btn__text">Lista de favoritos</span>
      </button>
      <h2 class="header__title">
        <span class="header__title_white">Saiba tudo em um só</span>
        <span class="header__title_blue">lugar.</span>
      </h2>
      <p class="header__text1">
        Personagens. localizações, episódios e muito mais.
      </p>
      <button type="button" class="header__btn btn">
        <img src="@/assets/icons/sun.svg" alt="moon" class="btn__emoticons" />
        <span class="btn__text">Escuro</span>
      </button>
      <button type="button" class="info__btn-sun btn">
        <img src="@/assets/icons/sun.svg" alt="sun" class="btn__emoticons" />
        <span class="btn__text">Claro</span>
      </button>
      <p class="header__text2">Ai sim, Porr#@%&*</p>
      <img
        src="@/assets/img/HighlightImageRick.png"
        class="header__rick"
        alt="Rick"
      />
    </header>
    <body class="body">
      <div v-if="characterStore.isLoading" class="body__loading">
        Загрузка...
      </div>
      <div v-else-if="characterStore.errorMessage" class="body__error">
        Ошибка: {{ characterStore.errorMessage }}
      </div>
      <div v-else class="body__container">
        <input
          type="text"
          class="body__search"
          placeholder="Personagem, episódio, localização..."
        />
        <p class="body__filter">Filtrar por:</p>
        <button type="button" class="body__btn btn">
          <img src="@/assets/icons/sun.svg" alt="face" class="btn__emoticons" />
          <span class="btn__text">Personagens</span>
        </button>
        <button type="button" class="body__btn btn">
          <img
            src="@/assets/icons/sun.svg"
            alt="planet"
            class="btn__emoticons"
          />
          <span class="btn__text">Localizaçãoes</span>
        </button>
        <button type="button" class="body__btn btn">
          <img
            src="@/assets/icons/sun.svg"
            alt="video"
            class="btn__emoticons"
          />
          <span class="btn__text">Episódio</span>
        </button>
        <h3 class="body__title">Personagens</h3>
        <button type="button" class="body__btn btn">
          <img
            src="@/assets/icons/sun.svg"
            alt="squares"
            class="btn__emoticons"
          />
          <span class="btn__text">Ver todos</span>
        </button>
        <ul class="body__list card">
          <li
            v-for="character in characters"
            :key="character.id"
            class="card__item"
          >
            <img
              :src="character.image"
              :alt="character.name"
              class="card__image"
            />
            <h2 class="card__name">{{ character.name }}</h2>
            <img
              src="@/assets/icons/heart-1.svg"
              alt="heart"
              class="btn__emoticons"
            />
            <p class="card__species">Вид: {{ character.species }}</p>
            <button type="button" class="card__btn btn">
              <img
                src="@/assets/icons/sun.svg"
                alt="info"
                class="btn__emoticons"
              />
              <span class="btn__text">Saiba mais</span>
            </button>
          </li>
        </ul>
        <h3 class="body__title">Episódios</h3>
        <button type="button" class="body__btn btn">
          <img
            src="@/assets/icons/sun.svg"
            alt="squares"
            class="btn__emoticons"
          />
          <span class="btn__text">Ver todos</span>
        </button>
        <ul class="body__list card">
          <li>
            <img
              src="@/assets/icons/sun.svg"
              alt="video"
              class="btn__emoticons"
            />
            <p class="card__species">Text</p>
            <button type="button" class="card__btn btn">
              <img
                src="@/assets/icons/sun.svg"
                alt="info"
                class="btn__emoticons"
              />
              <span class="btn__text">Saiba mais</span>
            </button>
            <img
              src="@/assets/icons/heart-1.svg"
              alt="heart"
              class="btn__emoticons"
            />
          </li>
        </ul>
        <h3 class="body__title">Localizações</h3>
        <button type="button" class="body__btn btn">
          <img
            src="@/assets/icons/sun.svg"
            alt="squares"
            class="btn__emoticons"
          />
          <span class="btn__text">Ver todos</span>
        </button>
        <ul class="body__list card">
          <li>
            <img
              src="@/assets/icons/sun.svg"
              alt="planet"
              class="btn__emoticons"
            />
            <p class="card__species_blue">Text</p>
            <button type="button" class="card__btn btn">
              <img
                src="@/assets/icons/sun.svg"
                alt="info"
                class="btn__emoticons"
              />
              <span class="btn__text">Saiba mais</span>
            </button>
            <img
              src="@/assets/icons/heart-1.svg"
              alt="heart"
              class="btn__emoticons"
            />
          </li>
        </ul>
      </div>
    </body>
    <footer class="footer">
      <img src="@/assets/img/logoA.svg" alt="Logo" class="footer__logo" />
      <button type="button" class="footer__btn btn">
        <img src="@/assets/icons/sun.svg" alt="up" class="btn__emoticons" />
        <span class="btn__text">Voltar ao topo</span>
      </button>
      <hr />
      <img src="@/assets/icons/sun.svg" alt="year" class="footer__img_year" />
      <p class="footer__text">2023</p>
      <img
        src="@/assets/icons/caret-left-1.svg"
        alt="arrow"
        class="footer__img_arrow"
      />
      <img
        src="@/assets/icons/caret-left-1.svg"
        alt="arrow"
        class="footer__img_arrow"
      />
      <p class="footer__text">
        <span class="footer__text_whate">Desenvolvido por</span>
        <span class="footer__text_blue">Henrique Sousa</span>
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.home-view {
  width: 1920px;
  height: 2480px;
  background: var(--subBlack);
}

.header {
  width: 1923px;
  height: 580px;
  background: var(--black);
  &__logo {
    width: 220px;
    height: 64px;
  }
  &__title {
    @include h3;
    &_white {
      background: var(--whate);
    }
    &_blue {
      background: var(--blue);
    }
  }
  &__text {
    @include p;
    &_whate {
      background: var(--whate);
    }
    &_blue {
      background: var(--blue);
    }
  }
  &__rick {
    width: 774px;
    height: 434px;
    opacity: 80%;
  }
}

.body {
  &__loading {
  }

  &__error {
  }

  &__container {
  }

  &__searc {
    width: 1240px;
    height: 48px;
  }

  &__filter {
    width: 85px;
    height: 24px;
    @include p;
    background: #e4f4f480;
  }

  &__title {
    @include h3;
    background: var(--whate);
  }
}

.footer {
  &__logo {
    width: 164.68px;
    height: 48px;
  }
  &__img {
    _year {
    }
  }
  &__text {
    &_whate {
    }
    &_blue {
    }
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

.card {
  &__item {
  }
  &__image {
  }
  &__name {
  }
  &__species {
  }
}
</style>
