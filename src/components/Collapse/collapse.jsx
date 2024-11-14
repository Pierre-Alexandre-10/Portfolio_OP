import { useState } from "react";

function Collapse({ title, content }) {
    // Déclaration de la position du collapse ouvert ou fermer
    const [isOpen, setIsOpen] = useState(true);
    // Fonction pour inverser l'état ouvert ou fermer
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse__dropdown__container ${isOpen ? "open" : ""}`}>
            <div className="collapse__dropdown__up">
                <h2>{title}</h2>
                <span onClick={toggleCollapse}>
                    {isOpen ? (
                        <i className="fa-solid fa-chevron-down"></i>
                    ) : (
                        <i className="fa-solid fa-chevron-up"></i>
                    )}
                </span>
            </div>
            <div className="collapse__dropdown__content">
                <div className="collapse__dropdown__content__p">{content}</div>
            </div>
        </div>
    );
}

export default Collapse;
