// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { NavLink, useLocation, matchPath } from "react-router-dom";

function Nav() {
    const location = useLocation();
    const isDescriptionRoute = matchPath(
        { path: "/description/:id" },
        location.pathname
    );
    return (
        <nav className="header__nav">
            {/* <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "header__nav__home active" : "header__nav__home"
                }
            >
                Accueil
            </NavLink>
            <NavLink
                to=""
                className={({ isActive }) =>
                    isActive ? "header__nav__about active" : "header__nav__about"
                }
            >
                Contact
            </NavLink> */}

            {/* {location.pathname === "/description:id" && (
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "header__nav__about active" : "header__nav__about"
                    }
                >
                   Accueil
                </NavLink>
            )} */}

            {isDescriptionRoute && (
                <NavLink
                    to="/"
                    className=""
                >
                    Accueil
                </NavLink>
            )}

            {location.pathname === "/" && (
                <Link
                    to="gallery__scroll"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="gallery__scroll"
                >
                    Projet
                </Link>
            )}

            {location.pathname === "/" && (
                <Link
                    to="competence"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="competence"
                >
                    Compétences
                </Link>
            )}
            
            {location.pathname === "/" && (
                <Link
                    to="contactForm"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="contact"
                >
                    Contact
                </Link>
            )}           
        </nav>
    );
}

export default Nav;




