import React from "react";
import logo from "../Assets/logo.png";
import "./NavBar.scss";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./BurgerMenu";
const NavBar = () => {
  const isPhone = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <div className="navbar">
      {isPhone && (
        <div>
          <BurgerMenu />
        </div>
      )}
      {isDesktop && (
        <div className="navbar-container-desktop">
          <div className="navbar-container-desktop-content">
            <img
              src={logo}
              className="navbar-container-desktop-content-image"
              alt="default"
            />
            <h2 className="navbar-container-desktop-content-title">
              MACIEJ WAWRYSZUK
            </h2>
          </div>
          <ul className="navbar-container-desktop-table">
            <li className="navbar-container-desktop-table-list-link">
              <a
                className="navbar-container-desktop-table-list-link"
                to="about"
                smooth="true"
                duration={1800}
              >
                <div className="navbar-container-desktop-table-list-link-title">
                  About Me
                </div>
              </a>
            </li>

            <li className="navbar-container-desktop-table-list-link">
              <a
                className="navbar-container-desktop-table-list-link"
                to="education"
                smooth="true"
                duration={1800}
              >
                <div className="navbar-container-desktop-table-list-link-title">
                  Education
                </div>
              </a>
            </li>

            <li className="navbar-container-desktop-table-list-link">
              <a
                className="navbar-container-desktop-table-list-link"
                to="learn"
                smooth="true"
                duration={1800}
              >
                <div className="navbar-container-desktop-table-list-link-title">
                  Can Do
                </div>
              </a>
            </li>

            <li className="navbar-container-desktop-table-list-link">
              <a
                className="navbar-container-desktop-table-list-link"
                to="projeects"
                smooth="true"
                duration={1800}
              >
                <div className="navbar-container-desktop-table-list-link-title">
                  Projects
                </div>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
