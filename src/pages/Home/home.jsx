import React from "react";
import Header from "../../components/Header/header";
import Presentation from "../../components/Presentation/presentation";
import Gallery from "../../components/Gallery/gallery";
import Footer from "../../components/Footer/footer";
import ProgressBar from "../../components/ProgressBar/progressBar";
import ContactForm from "../../components/ContactForm/contactForm";
import Contact from "../../components/Contact/contact";


function Home() {
    return (
        <div className="home">
            <div className="header__main">
                <header>
                    <Header />
                </header>
                <main>
                    <Presentation content="Après avoir passé de nombreuses années dans le secteur de l'automobile, je me suis réorienté vers le développement web. En formation depuis deux ans, j'ai acquis des compétences solides et continue de développer mes connaissances dans les technologies modernes du web. Ma transition professionnelle est motivée par un désir d'innovation et de perfectionnement, et je suis enthousiaste à l'idée de mettre en pratique mes compétences techniques et mon parcours professionnel dans des projets enrichissants."/>
                    <Gallery />
                    <ProgressBar />
                    <div className="contactBlock">
                        <ContactForm/>
                        <Contact />
                    </div>
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;



