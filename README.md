## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Реализовать SPA-приложение на React.js.
Приложение для поиска сериалов. На главной странице должно быть поле ввода, в которое пользователь вводит полное или частичное название сериала. 

Приложение должно запрашивать данные с API https://www.tvmaze.com/api.
Список сериалов, удовлетворяющих строке, введенной пользователем, можно получить ручкой /search/shows?q=:query.

Приложение должно отображать список полученных из API сериалов в сокращенной форме (например: название и рейтинг). Этот список должен сортироваться по названию сериала в алфавитном порядке с учетом регистра. По желанию, для большого количества данных можно сделать пагинацию.

По нажатию на название должна открываться страница с более подробной информацией об этом сериале (например: название, описание, язык, дата выхода, жанр, ссылка на оф сайт). Если у сериала нет картинки, использовать вместо нее изображение-заглушку.

На странице сериала должна быть кнопка “Назад”, возвращающая на страницу со списком всех найденных сериалов. 

Визуальная часть на ваше усмотрение (можно брать из Material UI любые готовые компоненты: поля ввода, кнопки, иконки и тд).

Приложение должно использовать Redux для хранения своих данных.

В качестве решения предоставить ссылку на репозиторий с исходным кодом.
