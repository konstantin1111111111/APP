// About.js
import React from 'react';
import ModelViewer from '../../models/model';
export function About() {
  return (
    <section className="section about">
      <h2 className="section__title">О проекте</h2>
      <p className="section__text">
        Данный проект демонстрирует мои навыки в инженерном конструировании.

   
      </p>
         <p className="section__title__model">
           Модель блочного ТЭНа
      </p>
      <ModelViewer />
    </section>
  );
}
