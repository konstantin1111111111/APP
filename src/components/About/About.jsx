// About.js
import React from 'react';

export function About() {
  return (
    <section className="section about">
      <h2 className="section__title">О проекте</h2>
      <p className="section__text">
        Этот проект демонстрирует мои навыки в инженерном конструировании.
      </p>
      <img 
        className="about__image"
        src="https://cdn.pixabay.com/photo/2016/11/29/03/53/blueprint-1867746_960_720.jpg" 
        alt="Чертеж" 
      />
    </section>
  );
}
