import 'normalize.css';
import './App.module.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Wrapper } from './components';
import { About, Contacts, CV, Main, NotFound, Photos, Portfolio } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="cv" element={<CV />} />

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
