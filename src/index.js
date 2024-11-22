import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './app';
import Menu from './menu';
import Inicio from './inicio';
import SobreNos from './sobrenos';
import Listagem from './listagem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cadastro" element={<App />} />
        <Route path="/listagem" element={<Listagem />} />
        <Route path="/sobrenos" element={<SobreNos />} />
      </Routes>
    </Router>
  </React.StrictMode>
);