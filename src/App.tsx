import 'normalize.css';
import './App.module.scss';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Wrapper } from './components';
import { About, Contacts, Main } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Main />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
