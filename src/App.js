import React from 'react';

import logo from './assets/logo.gif';

import './styles/app.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img className="header__logo" alt="logo" src={logo} />
      </header>
      <section className="container">
        <aside className="products"></aside>
        <aside className="cart"></aside>
      </section>
    </div>
  );
}

export default App;
