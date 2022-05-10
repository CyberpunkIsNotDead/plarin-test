import CssBaseline from '@mui/material/CssBaseline';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import { HomePage } from './pages/home';
import { FavoritesPage } from './pages/favorites';

const App = () => (
  <>
    <CssBaseline />
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </div>
  </>
);

export default App;
