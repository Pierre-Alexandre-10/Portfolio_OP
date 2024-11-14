import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import Banner from "../../components/Banner/banner"
import Image from "../../assets/images/bannerImg.jpg"

function Contact() {
    return (
        <div className="contact">
            <div className="header__main">
                <header>
                    <Header />                  
                    <Banner image={Image} alt="Bannière page de la page contact" texte="test"/>
                </header>
                <main>
                    <h2>Contact :</h2>
                    <p><i className="fa-regular fa-envelope"></i> alexandre.augustin10@gmail.com</p>
                    <p><i className="fa-brands fa-github"></i> https://github.com/Pierre-Alexandre-10</p>    
                    <p><i className="fa-brands fa-linkedin"></i> www.linkedin.com/in/pa-augustin</p>
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Contact;