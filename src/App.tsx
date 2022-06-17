import 'normalize.css';
import './App.module.scss';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Wrapper } from './components';
import { About, Contacts, Main, Photos, Portfolio } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="photos" element={<Photos />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
