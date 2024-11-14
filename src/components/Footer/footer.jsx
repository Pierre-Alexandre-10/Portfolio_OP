import Logo from "../../assets/images/LogoBlack.png"

function Footer() {
    return (
        <footer className="footer">
            {/* <div className="footer__txt">
                <h2>Contact :</h2>
                <p><i className="fa-regular fa-envelope"></i> alexandre.augustin10@gmail.com</p>
                <p><i className="fa-brands fa-github"></i> https://github.com/Pierre-Alexandre-10</p>    
                <p><i className="fa-brands fa-linkedin"></i> www.linkedin.com/in/pa-augustin</p>
            </div> */}
            <img className="footer__img" src={Logo} alt="Logo de la page" />
        </footer>
    );
}

export default Footer;
