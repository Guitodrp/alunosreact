import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";

const Menu = () => {
    return (
        <nav className="navigationWrapper">
            <div className="logoWrapper">
                <span className="stylish">Stylish</span>
                <span className="logo">Logo</span>
            </div>
            <ul className="navigation">
                <li className="parent">
                    <a className="link" href="#">
                        Home
                    </a>
                </li>
                <li className="parent">
                    <a className="link" href="#">
                        About
                    </a>
                </li>
                <li className="parent" id="clients">
                    <a className="link" href="#">
                        <i className="fas fa-minus"></i> Clients{" "}
                        <i className="fas fa-plus"></i>
                    </a>
                    <ul className="subnavigation">
                        <li>
                            <a className="link" href="#">
                                Burger King
                            </a>
                        </li>
                        <li>
                            <a className="link" href="#">
                                Southwest Airlines
                            </a>
                        </li>
                        <li>
                            <a className="link" href="#">
                                Levi Strauss
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="parent" id="services">
                    <a className="link" href="#">
                        <i className="fas fa-minus"></i> Services{" "}
                        <i className="fas fa-plus"></i>
                    </a>
                    <ul className="subnavigation">
                        <li>
                            <a className="link" href="#">
                                Print Design
                            </a>
                        </li>
                        <li>
                            <a className="link" href="#">
                                Web Design
                            </a>
                        </li>
                        <li>
                            <a className="link" href="#">
                                Mobile App Development
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="parent">
                    <a className="link" href="#">
                        Contact
                    </a>
                </li>
            </ul>
            <a
                href="https://dribbble.com/shots/5844983-Sub-Nav-Interaction-Concept"
                className="signature"
                target="_blank"
                rel="noopener noreferrer"
            >
                Designed by Carson Monroe
            </a>
        </nav>
    );
};

export default Menu;
