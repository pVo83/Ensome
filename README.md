# Ensome

Многостраничный корпоративный сайт компании Ensome (аналитика данных и IT-решения), собранный на Nuxt 4 и Vue 3.

## Возможности

- Многостраничная структура: Home, About, Services, Solutions, Pricing, Team, Blog, Contacts, FAQs + динамические страницы (`[slug]`)
- Адаптивная вёрстка (mobile-first, отдельная desktop/mobile навигация)
- SEO-мета на всех страницах, включая Open Graph (`usePageSeo`)
- Доступность: единый клавиатурный фокус через `:focus-visible`
- Формы с клиентской валидацией и имитацией отправки (без бэкенда)
- Оптимизация изображений: WebP через `imagemin` + `<picture>` с fallback
- SVG-спрайт для иконок
- Состояние на Pinia (мобильное меню, модалки)
- Горизонтальный скролл-карусель (`UiScrollCarousel`) без сторонних слайдеров
- Статическая сборка и автодеплой на GitHub Pages
- Строгие линтеры: ESLint + Stylelint + Prettier

## Стек

- Nuxt 4 + Vue 3 + Pinia
- SCSS (BEM, `@use` / `@forward`)
- ESLint + Stylelint + Prettier

## Быстрый старт

```sh
npm install
npm run dev
```

Приложение откроется на `http://localhost:5174`.

> Шрифты (`.woff2`) должны лежать в `app/assets/fonts/` — без них сборка завершится с ошибкой. Подробнее — в разделе «Шрифты» ниже.

## Структура проекта

```
app/
├── assets/
│   ├── fonts/        # .woff2 (OpenSans, Manrope)
│   ├── img/          # Исходники PNG/JPG → конвертируются в public/img/
│   └── scss/         # Глобальные стили
├── components/
│   ├── block/        # Секции страниц (Hero, Blog, Team…)
│   ├── card/         # Карточки
│   ├── layout/       # Header, Footer
│   ├── navigation/   # Desktop / Mobile (+ store мобильного меню)
│   └── ui/           # UI-kit (Button, Title, Picture, Modal, Icons…)
├── composables/      # usePageSeo, useScrollCarousel, isNavActive
├── layouts/          # default, empty
├── pages/            # Файловый роутинг Nuxt
└── utils/            # publicUrl и вспомогательные утилиты
shared/               # Статические данные (навигация, списки, тексты, блог)
public/               # Статика (favicon.svg, img/, video/)
scripts/              # generate-webp.js
```

## Скрипты

| Команда                 | Описание                                          |
| ----------------------- | ------------------------------------------------- |
| `npm run dev`           | Локальный dev-сервер с hot reload                 |
| `npm run build`         | Сборка для SSR / Node-сервера                     |
| `npm run generate`      | Статическая сборка для GitHub Pages               |
| `npm run preview`       | Просмотр production-сборки локально               |
| `npm run webp`          | Конвертация PNG/JPG из `app/assets/img/` в WebP   |
| `npm run lint`          | Проверка и автоисправление JS / TS / Vue (ESLint) |
| `npm run stylelint:fix` | Проверка и автоисправление стилей (Stylelint)     |

## Деплой

`app.baseURL` в `nuxt.config.ts` должен совпадать с именем репозитория на GitHub Pages (сейчас: `/Ensome/`).
Для статического хостинга используется `npm run generate` — артефакт в `.output/public`.

---

<details>
<summary>Подробная документация проекта</summary>

## Стили

### CSS-переменные

Все токены проекта — в `app/assets/scss/variables.scss`:

- Цвета: `--primary`, `--secondary`, `--helper-blue1…3`, `--tertiary`, `--white`, `--black`, `--gray`, `--background`, `--error`, `--success`
- Типографика: `--fs-12` … `--fs-80`
- Контейнер: `--content-width` (1110px), `--container-offset`
- Радиусы: `--radius-sm` … `--radius-xl`
- Переходы: `--trs35`

### Контейнеры

| Класс                                            | Назначение                               |
| ------------------------------------------------ | ---------------------------------------- |
| `.container`                                     | Стандартный контейнер (1110px + отступы) |
| `.container--large`                              | Широкий (1470px)                         |
| `.container--small`                              | Узкий (1090px)                           |
| `.container-full`                                | На всю ширину с боковыми отступами       |
| `.container-left` / `.container-right`           | Контент прижат к одному краю             |
| `.container-left-50` / `.container-right-50`     | Половина ширины (на ≤767px — 100%)       |
| `.container-half-left` / `.container-half-right` | Split-секции                             |

### Breakpoints

Миксины в `app/assets/scss/mixins/_breakpoints.scss`:

```scss
@include small-mobile {
} // ≤475px
@include mobile {
} // ≤575px
@include small-tablet {
} // ≤767px
@include tablet {
} // ≤1023px
@include big-desktop {
} // ≤1439px
@include for-desktop {
} // ≥1025px
@include hover {
} // только устройства с hover
```

## Шрифты

Подключаются локально через `@font-face` в `app/assets/scss/fonts.scss`.
Основной — **OpenSans** (`--ff-primary`), дополнительный — **Manrope** (`--ff-secondary`).

Файлы `.woff2` кладутся в `app/assets/fonts/` (subset — **latin** + **cyrillic**). Без них сборка завершится с ошибкой — это ожидаемое поведение.

Скачать: [google-webfonts-helper](https://gwfh.mranftl.com/) или [Fontsource](https://fontsource.org/).

Замена шрифта: положить новые `.woff2`, обновить `@font-face` в `fonts.scss`, изменить `--ff-primary` / `--ff-secondary` в `variables.scss`.

## Pinia (stores)

| Store                                               | Назначение                              |
| --------------------------------------------------- | --------------------------------------- |
| `app/components/navigation/store/useMobileStore.js` | Мобильное меню: `openMenu`, `closeMenu` |
| `app/components/ui/modal/const/useModalStore.js`    | Модалка: `openModal`, `closeModal`      |

Stores лежат рядом с фичей, к которой относятся.

## Layouts

Layout задаётся через `definePageMeta`:

```vue
<script setup>
definePageMeta({ layout: "empty" })
</script>
```

- `default` — Header + `<main>` + Footer + SVG-спрайт
- `empty` — только контент + SVG-спрайт (логин, 404…)

## Favicon

Файл — `public/favicon.svg`, подключение — в `nuxt.config.ts` → `app.head.link`.

## SVG-спрайт

Иконки добавляются в `app/components/ui/icons/Sprite.vue` внутри `<svg>` (`<symbol id="…">`).
Спрайт подключается в layouts как `<UiIconsSprite />`.

```vue
<UiAppIcon name="arrow__left" :width="20" :height="20" />
```

Или напрямую: `<svg><use href="#icon-name" /></svg>`.

## Изображения

Компонент `<UiPicture />` отдаёт `<picture>` с WebP-источником и fallback на оригинал. Пути учитывают `app.baseURL` через `publicUrl`.

1. Положите PNG/JPG в `app/assets/img/`
2. Запустите `npm run webp` (или `npm run generate` — конвертация запускается автоматически через `pregenerate`)
3. Готовые файлы появятся в `public/img/`

```vue
<UiPicture src="/img/photo.jpg" alt="Описание" />
```

Опциональные пропсы: `loading`, `width`, `height`, `cover`, `fillHeight`.

## Данные и формы

Контент страниц, списки и блог лежат в корневой папке `shared/` и импортируются напрямую (без HTTP API).

Формы (контакты, подписка) работают на клиенте: валидация полей и имитация отправки с `isLoading` — без бэкенда, чтобы сайт корректно жил на статическом хостинге (GitHub Pages).

## VS Code

Рекомендуемые расширения — в `.vscode/extensions.json`.
Format on save и Stylelint настроены в `.vscode/settings.json`.

</details>
