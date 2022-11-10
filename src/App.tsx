import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainPage } from './pages/mainPage';
import { WordsTable } from './pages/wordsTable';
import { NotFound } from './pages/notFound';
import { Menu } from './components/menu/index';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage />} /> 
        <Route path="/allwords" element={<WordsTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export { App };