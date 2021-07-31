import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import Cards from './components/card';
import Header from './components/header';

const App = () => (
  <>
    <Header />
    <main>
      <section>
        <Cards />
      </section>
    </main>
  </>
);

ReactDom.render(<App />, document.getElementById('app'));
