import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { navLinks } from "../../utiles/utiles";

const Header = ({ toggleMenu, setToggleMenu }) => {
    return (
        <header className="top-bar">
            {/* burger menu icon */}
            <button
                className={`top-bar-burger ${toggleMenu ? "top-bar-burger-toggled" : ""}`}
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                <div className="top-bar-burger-toggle"></div>
            </button>

            {/* company logo */}
            <div className="company">
                <Logo />
                <span className="company-name">Insurance Portal</span>
            </div>

            {/* nav-links */}
            <nav className="top-bar-nav">
                <ul className="top-bar-nav-list">
                    {navLinks.slice(0, 3).map(({ title, link }) => (
                        <li className="top-bar-nav-list-item">
                            <NavLink
                                className={({ isActive }) => (isActive ? "top-bar-nav-list-item-active" : undefined)}
                                to={link}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
