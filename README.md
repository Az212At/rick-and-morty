# Rick and Morty App

[![Deployed on GitHub Pages](https://img.shields.io/badge/demo-live-brightgreen)](https://az212at.github.io/rick-and-morty/)

🔗 **Демо:** [az212at.github.io/rick-and-morty](https://az212at.github.io/rick-and-morty/)

🎨 **Дизайн-макет (Figma):** [посмотреть](https://www.figma.com/community/file/1225458908057208058/rick-and-morty)

Веб-приложение для просмотра персонажей и эпизодов сериала «Рик и Морти», построенное на данных публичного [Rick and Morty API](https://rickandmortyapi.com/).

## Стек технологий

- **Vue 3** (Composition API, `<script setup>`)
- **TypeScript**
- **Pinia** — управление состоянием
- **Vue Router** — маршрутизация
- **SCSS** — стилизация
- **Axios** — HTTP-запросы
- **Vite** — сборка проекта
- **ESLint** — контроль качества кода

## Архитектура

Проект организован по методологии **Feature-Sliced Design (FSD)**:

```
src/
├── app/            # инициализация приложения: роутер, layouts, глобальные стили
├── entities/        # бизнес-сущности: character, episode
│   └── <entity>/
│       ├── api/      # запросы к API
│       ├── model/     # типы, Pinia-сторы
│       └── ui/        # презентационные компоненты
├── features/         # пользовательские сценарии (например, просмотр деталей персонажа)
├── widgets/          # композитные блоки интерфейса (header, footer)
├── pages/            # страницы приложения
└── shared/           # переиспользуемый код без привязки к домену
    ├── api/            # базовый HTTP-клиент
    ├── assets/          # шрифты, иконки, изображения
    ├── lib/             # чистые утилиты
    └── ui/              # UI-кит (кнопки, инпуты, модалка)
```

## Функциональность

- Просмотр списка персонажей карточками
- Просмотр списка эпизодов
- Модальное окно с подробной информацией о персонаже (статус, вид, пол, планета происхождения, текущее местоположение)
- Адаптивная тёмная тема интерфейса

# установка зависимостей
yarn

# запуск dev-сервера
yarn dev

# сборка production-версии
yarn build

# локальный просмотр production-сборки
yarn preview

# проверка кода ESLint (с автофиксом)
yarn lint

# форматирование кода Prettier
yarn format

# проверка типов TypeScript
yarn type-check

# проверка и автофикс стилей (Stylelint)
yarn stylelint

# деплой на GitHub Pages
yarn deploy

## API

Приложение использует публичный REST API:
[https://rickandmortyapi.com/api](https://rickandmortyapi.com/api)

Основные используемые эндпоинты:
- `GET /character` — список персонажей
- `GET /character/{id}` — данные конкретного персонажа
- `GET /episode` — список эпизодов