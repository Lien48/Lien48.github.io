import React, { useEffect, useState } from "react";
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

  return (
    <header className="header">
      <nav className="nav container">
        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
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
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="projects"
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
                onClick={closeMenuOnMobile}
              >
                Projects
              </NavLink>
            </li>
          </ul>
          <NavLink to="contact" className="nav__logo">
            <img src={Icon} />
            <div className="nav__logo__name" data-replace="Let's Chat!">
              <span
                className="nav__logo__name__span"
                style={{ display: "flex" }}
              >
                <div style={{ fontSize: 40, marginLeft: "10px" }}>L</div>
                <div style={{ padding: "11px 0 0 0" }}>ien</div>
                <div style={{ fontSize: 40, marginLeft: "10px" }}>C</div>
                <div style={{ padding: "11px 0 0 0" }}>hueh</div>
              </span>
            </div>
          </NavLink>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="about"
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
                onClick={closeMenuOnMobile}
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="contact"
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
                onClick={closeMenuOnMobile}
              >
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
