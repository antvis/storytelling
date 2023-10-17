import React from 'react'
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Story } from './pages/story';
import './index.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Story />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
