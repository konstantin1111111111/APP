import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">Иван Иванов</h1>
        <p className="header__subtitle">Инженер-конструктор</p>
      </header>

      <main className="main">
        <section className="section about">
          <h2 className="section__title">О проекте</h2>
          <p className="section__text">
            Этот проект демонстрирует мои навыки в инженерном конструировании и проектировании сложных систем.
            Включает 3D-модели, техническую документацию и анализ.
          </p>
          <img 
            className="about__image"
            src="https://cdn.pixabay.com/photo/2016/11/29/03/53/blueprint-1867746_960_720.jpg" 
            alt="Чертеж" 
          />
        </section>

        <section className="section skills">
          <h2 className="section__title">Навыки и технологии</h2>
          <ul className="skills__list">
            <li>AutoCAD, SolidWorks, Fusion 360</li>
            <li>3D-моделирование и визуализация</li>
            <li>Проектирование узлов и деталей</li>
            <li>Работа с технической документацией</li>
          </ul>
        </section>

        <section className="section contacts">
          <h2 className="section__title">Контакты</h2>
          <p>Email: ivan.ivanov@example.com</p>
          <p>Телефон: +7 (999) 123-45-67</p>
          <p><a href="https://www.linkedin.com/in/ivan-ivanov" target="_blank" rel="noreferrer">LinkedIn</a></p>
        </section>
      </main>

      <footer className="footer">
        © 2024 Иван Иванов
      </footer>
    </div>
  );
}

export default App;
