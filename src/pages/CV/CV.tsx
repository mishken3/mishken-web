import { NavLink } from 'react-router-dom';

import styles from './CV.module.scss';

export const CV = () => (
  <div className={styles.page}>
    <header>
      <h1 className={styles.name}>Бурцев Михаил</h1>
      <section className={styles.about}>
        <div>
          <p>Frontend developer</p>
          <p>Около полугода опыта коммерческой-фриланс разработки</p>
        </div>

        <div>
          <p>
            Предыдущая работа менеджером по продажам научила меня грамотной постановке дедлайнов и
            соблюдением их сроков, а также стрессоустойчивости и внимательности к деталям клиентов
            (оптическая индустрия).
          </p>
        </div>
        <div>
          <p>Нахожусь в Москве</p>
          <p>Рассматриваю преимущественно удалённую работу</p>
          <p>Размышляю о переезде в Петербург</p>
        </div>

        <div className={styles.links}>
          <p>8-999-996-57-13</p>
          <p>TG - mishken</p>
          <p>mishken3@gmail.com</p>
          <p>
            <a href="https://mishken.vercel.app" target="_blank">
              mishken.vercel.app
            </a>
          </p>
          <p>
            <a href="https://github.com/mishken3" target="_blank">
              github.com/mishken3
            </a>
          </p>
        </div>
      </section>
    </header>

    <main>
      <section className={styles.skills}>
        <h2>Skills</h2>
        <ul>
          <li>1+ года опыта HTML, CSS and JavaScript(ES6)</li>
          <li>
            0.5 года опыта React.js (16-18) с использованием:
            <ul>
              <li>
                <strong>TypeScript</strong>
              </li>
              <li>React-Router-DOM</li>
              <li>Custom hooks</li>
              <li>
                <strong>Redux</strong>
              </li>
              <li>HOCs</li>
              <li>Bootstrap (4-5)</li>
              <li>Material UI</li>
            </ul>
          </li>

          <li>
            Использовал основные frontend инструменты:
            <ul>
              <li>Git</li>
              <li>Webpack</li>
              <li>Gulp</li>
              <li>SCSS</li>
              <li>Axios</li>
              <li>Jest</li>
            </ul>
          </li>

          <li>
            Знаком со смежными технологиями:
            <ul>
              <li>Node.js</li>
              <li>*nix/Linux</li>
              <li>Google Analytics</li>
              <li>Spreadsheets</li>
            </ul>
          </li>
        </ul>

        <h2>Soft Skills</h2>
        <ul>
          <li>Upper intermediate English (B2)</li>
          <li>Стратегический и аналитический склад ума</li>
          <li>Хорошо воспринимаю новые технологии</li>
          <li>Нахожу контакт с людьми</li>
          <li>Любитель электронной музыки и бега</li>
        </ul>

        <h2>Courses</h2>
        <div className={styles.strong}>
          <p>React + Redux (Professional Development)</p>
          <p>
            Frontend курсы
            <a href="https://ru.hexlet.io/programs/frontend" target="_blank">
              Hexlet.io
            </a>
          </p>
          <p>May 2021 - December 2021</p>
        </div>
      </section>

      <section className={styles.personal}>
        <h2>Опыт</h2>
        <div className={styles.strong}>
          <h3>Frontend Developer</h3>
          <p>Self-employed</p>
          <p>December 2021 - Currently</p>
        </div>

        <p>Горд собой за:</p>
        <ul>
          <li>Современные приложения с использованием React, TypeScript и Bootstrap/SASS</li>
          <li>Разработку приложений с нуля</li>
          <li>Чёткую постановку сроков и соблюдение дедлайнов</li>
          <li>Применение переиспользуемых компонентов</li>
          <li>Использование современных инструментов frontend-мира разработки</li>
        </ul>
        <h2>Проекты</h2>
        <div className={styles.project}>
          <h3>
            <a href="https://cinema-rent.vercel.app/" target="_blank">
              Cinema Rent
            </a>
          </h3>
          <p>Сайт для аренды кинооборудования.</p>
          <p>Сделан для друзей.</p>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>SASS</li>
            <li>GIT</li>
            <li>SVG-анимации</li>
            <li>Гардиентовые переходы фоновых фотографий</li>
          </ul>
        </div>
        <div className={styles.project}>
          <h3>
            <a href="https://blockchain-calculator.vercel.app/" target="_blank">
              Blockchain calculator
            </a>
          </h3>
          <p>
            Калькулятор для конвертации USD в BTC или ETH. Курсы валют подтягиваются при каждом
            взаимодействии пользователя с публичного API биржи.
          </p>
          <p>Есть возможность ввода USD на баланс пользователя и конвертации в другие валюты.</p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>React Hooks</li>
            <li>React-Router-DOM</li>
            <li>TypeScript</li>
            <li>SASS</li>
            <li>Axios</li>
            <li>GIT</li>
          </ul>
        </div>
        <div className={styles.project}>
          <h3>
            <a href="https://mishken.vercel.app/" target="_blank">
              Личный сайт
            </a>
          </h3>
          <p>Личный веб-сайт портфолио. Собраны все мои проекты и немного личной информации.</p>
          <ul>
            <li>React</li>
            <li>React-Router-DOM</li>
            <li>TypeScript</li>
            <li>SASS</li>
            <li>GIT</li>
          </ul>
        </div>
        <h2>До frontend'а</h2>
        <div className={styles.project}>
          <h3>RETROSUPERFUTURE</h3>
          <p>Июль 2019 - Апрель 2021</p>
          <p>Менеджер в оптическом магазине.</p>
          <ul>
            <li>CMS Bitrix</li>
            <li>Работа с товаром в 1С и МойСклад</li>
            <li>Создание рекламных кампаний в Google.Ads и Яндекс.Директ</li>
            <li>SMM</li>
          </ul>
        </div>
        <div className={styles.project}>
          <h3>Uniqlo</h3>
          <p>Март 2017 - Май 2019</p>
          <p>Старший продавец в японском ритейлере</p>
          <ul>
            <li>Управление персоналом</li>
            <li>
              Работа в Exel: составление графиков работы магазина (день, неделя, месяц),
              планирование продаж определённого отдела.
            </li>
            <li>Отчётность в должности старшего кассира</li>
            <li>
              Документооборот с подрядчиками (Комус, Инкассации, отчётность для главного офиса).
            </li>
          </ul>
        </div>
        <h2>Образование</h2>
        <div className={styles.strong}>
          <p>Московский энергетический институт (НИУ МЭИ)</p>
          <p>Маркетинг и Реклама</p>
          <p>Бакалавр</p>
          <p>2015 - 2019</p>
        </div>
      </section>
    </main>

    <footer>
      <NavLink to="/">Home</NavLink>
    </footer>
  </div>
);
