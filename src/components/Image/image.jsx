import CV from "../../assets/images/PortfolioCV.jpg";
import cvPDF from "../../assets/images/PortfolioCV.pdf";

function Image() {
    return (
        <div className="image">
            <img src={CV} alt="CV" className="image__content"/>
            <div className="image__link">
                <a href={cvPDF} download="PortfolioCV.pdf" className="image__downloadButton">
                    Télécharger le CV
                </a>
            </div>
        </div>
    );
}

export default Image;
