import { Link } from "react-router-dom";
import Card from "../Card/card";
import { useEffect, useState } from "react";

function Gallery() {
    //Stock les données JSON récupérées
    const [projectData, setProjectData] = useState([]);

    // Récupère les données json via fetch après création composant
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/data/data.json`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                // Convertir le json en objet javascript
                const data = await response.json();
                setProjectData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 className="gallery__title">Projet</h2>
            <div className="gallery">
                <div className="gallery__card">
                    {projectData.map((project) => {
                        return (
                            <article key={project.id}>
                                <Link to={`/description/${project.id}`}>
                                    <Card image={project.cover} title={project.title}></Card>
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
