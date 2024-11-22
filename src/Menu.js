import './menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';
import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Importe o Link do React Router

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <nav className="navigationWrapper">
            <div className="logoWrapper">
                <img src={logo} alt="Cadastro" style={{ width: '40px', height: 'auto', borderRadius: '8px', marginRight: '16px' }} />
                <span className="stylish">High School</span>
            </div>
            <ul className="navigation">
                <li className="parent">
                    <Link className="link" to="/">
                        Inicio
                    </Link>
                </li>
                <li
                    className={`parent ${activeMenu === 'clients' ? 'active' : ''}`}
                    id="clients"
                    onClick={() => toggleMenu('clients')}
                >
                    <Link className="link" to="#">
                        <i className="fas fa-minus"></i> Alunos{" "}
                        <i className="fas fa-plus"></i>
                    </Link>
                    <ul className="subnavigation">
                        <li>
                            <Link className="link" to="/cadastro"> {/* Usando o Link para navegar para a página de cadastro */}
                                Cadastro
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/listagem"> {/* Adapte se precisar de uma rota para "Listagem" */}
                                Listagem
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="parent">
                    <Link className="link" to="/sobrenos">
                        Sobre nós
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
