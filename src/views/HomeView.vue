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
    <header class="home-view__header header">
      <div class="header__logo logo">
        <img src="@/assets/img/logoA.svg" alt="Logo" class="logo__svg" />
        <button type="button" class="logo__btn btn">
          <span class="btn__emoticons">❤️</span>
          <span class="btn__text">Lista de favoritos</span>
        </button>
      </div>
      <div class="header__info info">
        <h2 class="info__title title">
          <span class="title__white">Saiba tudo em um só</span>
          <span class="title__blue">lugar.</span>
        </h2>
        <p class="info__paragraph">
          Personagens. localizações, episódios e muito mais.
        </p>
        <button type="button" class="info__btn-moon btn">
          <span class="btn__emoticons">🌙</span>
          <span class="btn__text">Escuro</span>
        </button>
        <button type="button" class="info__btn-sun btn">
          <span class="btn__emoticons">☀️</span>
          <span class="btn__text">Claro</span>
        </button>
        <p class="info__paragraph-blue">Ai sim, Porr#@%&*</p>
      </div>
      <img
        src="@/assets/img/HighlightImageRick.png"
        class="header__png"
        alt="#"
      />
    </header>
    <body class="home-view__body body">
      <div class="body__search search">
        <input
          type="text"
          class="search__input input"
          placeholder="Personagem, episódio, localização..."
        />
        <p class="search-paragraph">Filtrar por:</p>
        <button type="button" class="search__btn-pers btn">
          <span class="btn__emoticons">🌙</span>
          <span class="btn__text">Personagens</span>
        </button>
        <button type="button" class="search__btn-loc btn">
          <span class="btn__emoticons">🌙</span>
          <span class="btn__text">Localizaçãoes</span>
        </button>
        <button type="button" class="search__btn-episod btn">
          <span class="btn__emoticons">🌙</span>
          <span class="btn__text">Episódio</span>
        </button>
      </div>
      <div class="body__personagens personagens">
        <h3 class="personagens__title">Personagens</h3>
        <button type="button" class="personagens-btn btn">
          <span class="btn__emoticons">🌙</span>
          <span class="btn__text">Ver todos</span>
        </button>
        <div v-if="characterStore.isLoading" class="personagens__loading">
          Загрузка...
        </div>
        <div v-else-if="characterStore.errorMessage" class="personagens__error">
          Ошибка: {{ characterStore.errorMessage }}
        </div>
        <ul v-else class="personagens__list list">
          <li
            v-for="character in characters"
            :key="character.id"
            class="list__item"
          >
            <img
              :src="character.image"
              :alt="character.name"
              class="list__image"
            />
            <div class="list__info info">
              <h2 class="info__name">{{ character.name }}</h2>
              <p class="info__species">Вид: {{ character.species }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="body__episódios episódios">
        <h3 class="episódios__title title">Episódios</h3>
        <button type="button" class="episódios__btn btn">
          <span class="btn__emoticons">🌙</span>
          <span class="btn__text">Ver todos</span>
        </button>
      </div>
      <div class="body__localizações localizações">
        <h3 class="localizações__title title">Localizações</h3>
        <button type="button" class="localizações__btn btn">
          <span class="btn__emoticons">🌙</span>
          <span class="btn__text">Ver todos</span>
        </button>
      </div>
    </body>
    <footer class="home-view__footer footer">
      <img src="@/assets/img/logoA.svg" alt="Logo" class="footer__svg" />
      <button type="button" class="footer__btn btn">
        <span class="btn__emoticons">❤️</span>
        <span class="btn__text">Voltar ao topo</span>
      </button>
      <hr />
      <p class="footer__paragraph paragraph">2023</p>
      <p class="footer__paragraph paragraph">
        <span class="paragraph__white">Desenvolvido por</span>
        <span class="paragraph__blue">Henrique Sousa</span>
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
  &__header {
    width: 1923px;
    height: 580px;
    background: var(--black);
    &__logo {
      width: 1239px;
      height: 64px;
      &__svg {
        width: 219.57px;
        height: 64px;
      }
      &__btn {
        width: 157px;
        height: 32px;
        border-radius: 32px 0 0 0;
        background: var(--blue);
        &__emoticons {
          width: 24px;
          height: 24px;
          padding: 3px 1.5px 3px 1.5px;
        }
        &__text {
          width: 116px;
          height: 20px;
          @include text-inter;
          background: var(--whate);
        }
      }
    }
    &__info {
      width: 1236px;
      height: 434px;
      &__title {
        width: 397px;
        height: 120px;
        @include h3;
        background: var(--whate);
        &__white {
        }
        &__blue {
        }
      }
      &__paragraph {
        width: 397px;
        height: 24px;
        @include p;
        background: var(--whate);
      }
      &__btn-moon {
        width: 90px;
        height: 32px;
        box-shadow: -4px 4px 4px 0px #0c0c0c;
        &__emoticons {
          width: 24px;
          height: 24px;
          padding: 2.07px 2.07px 3.18px 3.18px;
        }
        &__text {
          width: 50px;
          height: 20px;
          @include text-inter;
          background: var(--whate);
        }
      }
      &__btn-sun {
        width: 76px;
        height: 32px;
        border-radius: 32px 0 0 0;
        background: var(--gray);
        &__emoticons {
          width: 24px;
          height: 24px;
          padding: 0.94px 0 0 0;
        }
        &__text {
          width: 36px;
          height: 20px;
          @include text-inter;
          background: var(--whate);
        }
      }
      &__paragraph-blue {
        width: 397px;
        height: 24px;
        @include p;
        background: var(--blue);
      }
    }
    &__png {
      width: 774px;
      height: 434px;
      opacity: 80%;
    }
  }
  &__body {
    &__searc {
      &__input {
        width: 1240px;
        height: 48px;
      }
      &__paragraph {
        width: 85px;
        height: 24px;
        @include p;
        background: #e4f4f480;
      }
      &__btn-pers {
        width: 129px;
        height: 32px;
        border-radius: 32px 0 0 0;
        background: var(--blue);
        &__emoticons {
          width: 24px;
          height: 24px;
        }
        &__text {
          width: 88px;
          height: 20px;
          @include text-inter;
          background: var(--whate);
        }
      }
      &__btn-loc {
        width: 136px;
        height: 32px;
        border-radius: 32px 0 0 0;
        background: var(--gray);
        &__emoticons {
          width: 24px;
          height: 24px;
          top: 656px;
          left: 1342px;
          padding: 3px 0.75px 3px 0.75px;
        }
        &__text {
          width: 96px;
          height: 20px;
          @include text-inter;
          background: var(--whate);
        }
      }
      &__btn-episod {
        width: 99px;
        height: 32px;
        border-radius: 32px 0 0 0;
        background: var(--gray);
        &__emoticons {
          width: 24px;
          height: 24px;
        }
        &__text {
          width: 59px;
          height: 20px;
          @include text-inter;
          background: var(--whate);
        }
      }
    }
    &__personages {
      width: 294px;
      height: 400px;
      border-radius: 8px 0 0 0;
      background: var(--gray);
      &__title {
        width: 199px;
        height: 16px;
        @include text-inter;
        background: var(--whate);
      }
      &__btn {
        width: 115px;
        height: 32px;
        border-radius: 32px 0 0 0;
        background: var(--gray);
        &__emoticons {
          width: 24px;
          height: 24px;
          padding: 2.25px;
        }
        &__text {
          width: 75px;
          height: 20px;
          @include text-inter;
          background: var(--whate);
        }
      }
      &__loading {
      }
      &__error {
      }
      &__list {
        &__item {
          &__img {
            width: 262px;
            height: 200px;
            border-radius: 16px 0 0 0;
          }
          &__info {
            &__name {
              width: 199px;
              height: 16px;
              @include text-inter;
              background: var(--whate);
            }
            &__species {
              width: 125px;
              height: 16px;
            }
          }
        }
      }
    }
    &__episodios {
      &__title {
      }
      &__btn {
        &__emoticons {
        }
        &__text {
        }
      }
    }
    &__localizações {
      &__title {
      }
      &__btn {
        &__emoticons {
        }
        &__text {
        }
      }
    }
  }
  &__footer {
    &__svg {
      width: 164.68px;
      height: 48px;
      top: 2239px;
      left: 341px;
    }
    &__btn {
      &__emoticons {
      }
      &__text {
      }
    }
    &__paragraph {
      &__white {
      }
      &__blue {
      }
    }
  }
}
</style>
