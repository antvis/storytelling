import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Story } from './pages/story';
import './index.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<Story />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
