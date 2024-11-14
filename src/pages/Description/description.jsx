import React from "react";
import Header from "../../components/Header/header";
import ProjectPage from "../../components/DetailsProject/detailsProject";
import Footer from "../../components/Footer/footer";

function Description() {
    return (
        <div>
            <div className="header__main">
                <header>
                    <Header />
                </header>
                <main>
                    <ProjectPage />
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Description;
