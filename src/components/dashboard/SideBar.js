import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { navLinks } from "../../utiles/utiles";
import Avater from "../../assets/avater.png";
import { ReactComponent as LogOut } from "../../assets/log-out.svg";

const SideBar = ({ toggleMenu, setToggleMenu }) => {
    return (
        <div className={`side-bar ${toggleMenu ? "side-bar-toggle" : ""}`}>
            <div className="side-bar-content">
                {/* company logo */}
                <Link to={"/"} className="company">
                    <Logo />
                    <span className="company-name">Insurance Portal</span>
                </Link>

                {/* user details and plan */}
                <div className="user">
                    <img src={Avater} />
                    <div className="user-greeting">Hello ! Rusalba Ruiz</div>
                    <div className="user-alert">Welcome Back To Your Insurance Portal</div>
                    <div className="user-plan">
                        Your Plan : <span>Free</span>
                    </div>
                    <button className="user-create-plan" type="button">
                        Create New Plan <span>+</span>
                    </button>
                </div>

                {/* navigation links and log-out button */}
                <nav className="side-bar-nav">
                    <ul className="side-bar-nav-list">
                        {navLinks.map(({ title, icon, link }) => (
                            <li className="side-bar-nav-list-item">
                                <NavLink
                                    to={link}
                                    className={({ isActive }) =>
                                        isActive ? "side-bar-nav-list-item-active" : undefined
                                    }
                                    onClick={() => {
                                        if (toggleMenu !== false) setToggleMenu(false);
                                    }}
                                >
                                    {icon}
                                    <span>{title}</span>
                                </NavLink>
                            </li>
                        ))}
                        <li className="side-bar-nav-list-item action">
                            <button>
                                <LogOut /> <span>Log Out</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
