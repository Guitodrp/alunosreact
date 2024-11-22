import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';

import React, { useState } from "react";

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <nav className="navigationWrapper">
            <div className="logoWrapper">
                <img src={logo} alt="Cadastro" style={{ width: '40px', height: 'auto', borderRadius: '8px', marginRight: '16px' }} />
                <span className="stylish">School</span>
            </div>
            <ul className="navigation">
                <li className="parent">
                    <a className="link" href="#">
                        Inicio
                    </a>
                </li>
                <li
                    className={`parent ${activeMenu === 'clients' ? 'active' : ''}`}
                    id="clients"
                    onClick={() => toggleMenu('clients')}
                >
                    <a className="link" href="#">
                        <i className="fas fa-minus"></i> Alunos{" "}
                        <i className="fas fa-plus"></i>
                    </a>
                    <ul className="subnavigation">
                        <li>
                            <a className="link" href="#">
                                Cadastro
                            </a>
                        </li>
                        <li>
                            <a className="link" href="#">
                                Listagem
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="parent">
                    <a className="link" href="#">
                        Sobre nós
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
