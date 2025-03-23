<script lang="ts" setup="">
import { useCharacterStore } from "@/modules/post-page/store/characterStore";
import { ref } from "vue";
import { ICharacter } from "@/modules/post-page/types/characters";

defineOptions({
  name: "TheMain",
});

const characterStore = useCharacterStore();
const characters = ref<ICharacter[]>([]);
</script>

<template>
  <main class="the-main">
    <div class="the-main__container">
      <div v-if="characterStore.isLoading" class="the-main__loading">
        Загрузка...
      </div>
      <div v-else-if="characterStore.errorMessage" class="the-main__error">
        Ошибка: {{ characterStore.errorMessage }}
      </div>
      <div class="the-main__content">
        <div class="the-main__input-and-btn">
          <input
            type="text"
            class="the-main__input"
            placeholder="Personagem, episódio, localização..."
          />
          <div class="the-main__buttons">
            <p class="the-main__filter">Filtrar por:</p>
            <button type="button" class="the-main__btn btn">
              <img
                src="@/assets/icons/sun.svg"
                alt="face"
                class="btn__emoticons"
              />
              <span class="btn__text">Personagens</span>
            </button>
            <button type="button" class="the-main__btn btn">
              <img
                src="@/assets/icons/sun.svg"
                alt="planet"
                class="btn__emoticons"
              />
              <span class="btn__text">Localizaçãoes</span>
            </button>
            <button type="button" class="the-main__btn btn">
              <img
                src="@/assets/icons/sun.svg"
                alt="video"
                class="btn__emoticons"
              />
              <span class="btn__text">Episódio</span>
            </button>
          </div>
        </div>
        <div class="the-main__block characters">
          <h3 class="the-main__title">Personagens</h3>
          <button type="button" class="the-main__btn btn">
            <img
              src="@/assets/icons/sun.svg"
              alt="squares"
              class="btn__emoticons"
            />
            <span class="btn__text">Ver todos</span>
          </button>
          <ul class="the-main__list card">
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
        </div>
        <div class="the-main__block episodes">
          <h3 class="the-main__title">Episódios</h3>
          <button type="button" class="the-main__btn btn">
            <img
              src="@/assets/icons/sun.svg"
              alt="squares"
              class="btn__emoticons"
            />
            <span class="btn__text">Ver todos</span>
          </button>
          <ul class="the-main__list card">
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
        </div>
        <div class="the-main__block localizations">
          <h3 class="the-main_title">Localizações</h3>
          <button type="button" class="body__btn btn">
            <img
              src="@/assets/icons/sun.svg"
              alt="squares"
              class="btn__emoticons"
            />
            <span class="btn__text">Ver todos</span>
          </button>
          <ul class="the-main__list card">
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
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.the-main {
  &__container {
    width: 1236px;
  }

  &__loading {
  }

  &__error {
  }

  &__input {
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
