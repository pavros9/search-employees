## Ссылка

Проект выложен на Netlify https://cute-daffodil-92505e.netlify.app

## Запуск проекта

```
npm install - установка зависомости
npm run start - запуск frontend проекта на webpack dev server
```

---

## Скрипты

-   `npm run start` - запуск frontend проекта на webpack dev server
-   `npm run build:prod` - сборка в prod режиме
-   `npm run build:dev` - сборка в dev режиме
-   `npm run lint:ts` - проверка ts файлов линтером
-   `npm run lint:ts:fix` - исправление ts файлов линтером
-   `npm run lint:scss` - проверка scss файлов style линтером
-   `npm run lint:scss:fix` - исправление scss файлов style линтером

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

---

## Используемые библиотеки

- `react-virtuoso` - для виртуализации списка EmployeeList
- `react-redux-toastr` - для уведомлений

---

##### Запуск линтеров

-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Сущности (entities)

-   [Employee] (/src/entities/Employee)

## Фичи (features)

-   [SearchEmployees] (/src/features/SearchEmployees)

## Из интересного

- Динамическая подгрузка страниц
- Виртуализация списка
