import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import Cards from './components/card';
import Header from './components/header';
import FormWithCards from './components/formWithCards/renderForm';

const App = () => (
  <>
    <Header />
    <main className="page__main">
      <section className="section">
        <Cards />
      </section>
      <section className="section section_background-powerblue">
        <FormWithCards />
      </section>
    </main>
  </>
);

ReactDom.render(<App />, document.getElementById('app'));
