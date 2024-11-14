import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import Carrousel from "../Carrousel/carrousel";
import Title from "../Title/title";
import Tags from "../Tags/tags";
import Text from "../Text/text"
import Objective from "../Objective/objective"
import { useEffect, useState } from "react";

function DetailsProject() {
    // Récupérer l'id dans l'url
    const { id } = useParams();

    // Stocker le données récupérés
    const [items, setItem] = useState([]);

    // Suivre l'état de chargement des données pour la page erreur
    const [loading, setLoading] = useState(true);

    // Tableau de valeur comparative pour la notation
    // const notes = [1, 2, 3, 4, 5];

    // Récupère les données json via fetch après création composant
    useEffect(() => {
        const fetchData = async () => {
            try {
                // process.env.PUBLIC_URL génère l'url complète pour que le json soit accessible
                const response = await fetch(`${process.env.PUBLIC_URL}/data/data.json`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                // Convertir le json en objet javascript
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredItem = items.find((item) => item.id === id);
    const navigate = useNavigate();

    useEffect(() => {
        // Si le chargement est terminé est que aucun élément ne correspond à l'ID
        if (!loading && !filteredItem) {
            navigate("*");
        }
    }, [loading, filteredItem, navigate]); // Assure que l'effet se déclenche correctement lorsque ces valeurs changent

    return filteredItem ? (
            <div className="projectPage">
                <Carrousel filter={filteredItem} />
                <div className="projectPage__infoLink">
                    <div className="projectPage__info">
                        <Title title={filteredItem.title} />
                        <Text content={filteredItem.description}/>
                        <Objective content={filteredItem}/>
                        <Tags filter={filteredItem} />
                    </div>
                    <div className="projectPage__infoLink__position">
                        <div className="projectPage__infoLink__link">
                            <Link className="projectPage__infoLink__link__github"
                                to="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(filteredItem.github, "_blank", "noopener,noreferrer");
                                }}
                            >
                                <i class="fa-brands fa-github"></i>
                                <p>GitHub</p>
                            </Link>
                            <Link
                                to="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(filteredItem.page, "_blank", "noopener,noreferrer");
                                }}
                            >
                                <i className="fa-solid fa-link"></i>
                                <p>Page Web</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
    ) : (
        <p>Chargement...</p>
    );
}

export default DetailsProject;
