<h1 align="center">Overture</h1>

<p align="center">
  <img src="public/favicon.ico" alt="overture-logo" width="120px" height="120px"/>
  <br>
    <em>
        Overture - это ваш локальный менеджер веб приложений
    </em>
  <br>
</p>

<p align="center">
  <a href="https://homosanyok.github.io/overture/"><strong>Демо приложения</strong></a>
  <br>
</p>

<p align="center">
  <a href="https://v18.angular.dev/overview">
    <img src="https://img.shields.io/badge/Angular-v18-%234caf50?logo=angular" alt="Angular" />
  </a>
  <a href="https://sortablejs.github.io/Sortable/?ref=vanillalist">
    <img src="https://img.shields.io/badge/SortableJS-v1.15.6-%234caf50" alt="SortableJS" />
  </a>
  <a href="https://dy.github.io/resizable/">
    <img src="https://img.shields.io/badge/Resizable-v2.0.0-%234caf50" alt="Resizable" />
  </a>
  <a href="https://ahsanayaz.github.io/ngx-device-detector/">
    <img src="https://img.shields.io/badge/ngxDeviceDetector-v8.0.0-%234caf50?label=ngx-device-detector" alt="ngx-device-detector" />
  </a>
</p>

# Описание

Пет-проект, который я реализовал специально для минимальной демонстрации своего понимания Angular и
web разработки в принципе.

Работает как приложение в себе. Для работы не требует API. <br>
Является простым агрегатором ваших ссылок.

Вы можете запустить [демо](https://homosanyok.github.io/overture/) прямо сейчас!

### Взаимодействие

Основной сценарий взаимодействия с приложением:

- `добавление` - раскройте меню настроек и кликните по кнопке с иконкой "плюс";
- `заполнение` - заполните поля формы: <br>
  - введите короткое название вашей ссылки;
  - введите адрес иконки в сети, которая символизирует приложение;
  - введите адрес приложения;
- `использование` - все ваши приложения хранятся в локальной памяти сайта: 
после перезагрузки страницы всё сохранится.

# Развёртывание

На этапе развёртывания предлагается несколько вариантов получения и запуска собранного проекта. <br>

## Сборка

Предполагается, что у вас установлен [Node.js](https://nodejs.org/en). <br>
Получите код проекта из [репозитория](https://github.com/homoSanyok/overture) и установите все зависимости:
```bash
git clone https://github.com/homoSanyok/overture
cd overture
npm i 
```
Далее приступите к сборке:
```bash
npm run build
```
После сборки в папке `dist/overture` вам будет доступна папка со статической вёрсткой проекта: `browser`. <br>
Проверьте наличие этой папки:
```bash
ls dist/overture/browser
```

## Запуск

После сборки проекта предлагается несколько способов его запуска.

### serve

Способ предполагает установку npm пакета [serve](https://www.npmjs.com/package/serve) предназначенного для <br>
запуска простого веб-сервера статической вёрстки на локальной машине. 

Для установки и запуска в папке проекта запустите следующие скрипты:
```bash
npm i --save-dev serve
npx serve ./dist/overture/browser
```

Веб сервер запустится на порту `3000`.
Для смены порта запускайте команду с аргументом `-l`. 

### Docker

В проекте уже присутствует `docker-compose.yaml` файл запуска собранного проекта. <br>
Контейнер запустит `caddy` сервер, в который будет проброшена папка с собранным проектом.

Для развёртывания в папке проекта активируйте скрипт:
```bash
docker-compose up -d
```

Ваш веб сервер будет запущен на порту `3000`. <br>
Если вы хотите изменить внешний порт контейнера, отредактируйте `docker-compose.yaml` файл.