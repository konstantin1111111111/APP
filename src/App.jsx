import React from 'react';
import {Header} from './components/Header/Header';
import {About} from './components/About/About';
import {Skills}  from './components/Skills/Skills';
import {Contacts} from './components/Contacts/Contacts';
import {Footer}  from './components/Footer/Footer';
import "./App.css"
export function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main">
        <About />
        <Skills />
        <Contacts />
      </main>

      <Footer />
    </div>
  );
}
