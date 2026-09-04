# Pilates Point — Next.js + TypeScript

SEO-ориентированный одностраничный лендинг студии Pilates Point.

## Запуск

```bash
npm install
npm run dev
```

Затем откройте адрес, который покажет Next.js.

## Сборка

```bash
npm run build
npm run start
```

Стек:
- Next.js App Router
- React
- TypeScript
- FSD-структура
- адаптивная верстка без UI-фреймворков

SEO:
- статическая генерация главной страницы
- Metadata API
- `sitemap.xml`
- `robots.txt`
- JSON-LD для локального бизнеса
- Open Graph изображение через `opengraph-image`

Изображения лежат локально в `src/shared/assets/images`, поэтому после установки npm-зависимостей сайт не зависит от внешнего фотохостинга.
