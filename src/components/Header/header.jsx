import Nav from "../Nav/nav";
import logo from "../../assets/images/Logo.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo de la page web" className="header__img" />
            <Nav />
        </header>
    );
}

export default Header;
