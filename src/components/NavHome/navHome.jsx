import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="header__nav">
            <Link to="/" className="error__container__link">
                Accueil
            </Link>
        </nav>
    );
}

export default Nav;