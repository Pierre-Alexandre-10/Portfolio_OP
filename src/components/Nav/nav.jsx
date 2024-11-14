import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="header__nav">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "header__nav__home active" : "header__nav__home"
                }
            >
                Accueil
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive ? "header__nav__about active" : "header__nav__about"
                }
            >
                Contact
            </NavLink>
        </nav>
    );
}

export default Nav;




