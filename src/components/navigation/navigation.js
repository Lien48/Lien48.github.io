import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import Icon from "../../assets/LC Icon.png";
import "./navigation.css";

/* Reference website
https://blog.logrocket.com/create-responsive-navbar-react-css/
*/

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };

    /* Saving NavLink example of how to route to a different page
        <NavLink
            to="/"
            className={({ isActive }) =>
                `nav__link ${
                //Nested CSS conditionals required for appropriate padding on nav links
                    isActive
                    ? showMenu
                    ? "nav__link__active__menu"
                    : "nav__link__active"
                    : ""
                    }`
                    }
                onClick={closeMenuOnMobile}>
                Home
                </NavLink>
    */

    return (
        <header className="header">
            <nav className="nav container">
                <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a
                                href="#portfolioLink"
                                className="nav__link"
                                onClick={closeMenuOnMobile}>
                                Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#experienceLink"
                                className="nav__link"
                                onClick={closeMenuOnMobile}>
                                Experience
                            </a>
                        </li>
                    </ul>
                    <NavLink
                        to="https://ca.linkedin.com/in/lienchueh"
                        target="_blank"
                        className="nav__logo">
                        <img src={Icon} alt="icon" />
                        <div className="nav__logo__name" data-replace="Let's Chat!">
                            <span className="nav__logo__name__span" style={{ display: "flex" }}>
                                <div style={{ fontSize: 40, marginLeft: "10px" }}>L</div>
                                <div style={{ padding: "11px 0 0 0" }}>ien</div>
                                <div style={{ fontSize: 40, marginLeft: "10px" }}>C</div>
                                <div style={{ padding: "11px 0 0 0" }}>hueh</div>
                            </span>
                        </div>
                    </NavLink>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#aboutLink" className="nav__link" onClick={closeMenuOnMobile}>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="https://ca.linkedin.com/in/lienchueh"
                                target="_blank"
                                className={({ isActive }) =>
                                    `nav__link ${
                                        //Nested CSS conditionals required for appropriate padding on nav links
                                        isActive
                                            ? showMenu
                                                ? "nav__link__active__menu"
                                                : "nav__link__active"
                                            : ""
                                    }`
                                }
                                onClick={closeMenuOnMobile}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <IoClose />
                    </div>
                </div>

                <div>
                    <NavLink to="/" className="nav__logo__minimized">
                        Lien Chueh
                    </NavLink>
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
