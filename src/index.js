import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import Menu from './Menu';
import Inicio from './Inicio';
import SobreNos from './SobreNos';
import Listagem from './Listagem';

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