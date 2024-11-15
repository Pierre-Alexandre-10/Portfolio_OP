import React from 'react';
import Image from "../Image/image"

function ProgressBar() {
    // Liste des différentes barres de progression
    const progressValues = [
        { content: 'HTML', progress: 80, color: '#ff6060' },
        { content: 'CSS', progress: 80, color: '#ff6060' },
        { content: 'JavaScript', progress: 60, color: '#ff6060' },
        { content: 'React', progress: 70, color: '#ff6060' },
        { content: 'Node.js', progress: 60, color: '#ff6060' },
        { content: 'Express', progress: 60, color: '#ff6060' },
        { content: 'MongoDB', progress: 65, color: '#ff6060' },
        { content: 'Git', progress: 70, color: '#ff6060' },
        { content: 'SEO', progress: 70, color: '#ff6060' },
        { content: 'Responsive Design', progress: 90, color: '#ff6060' },
    ];

    return (
            <div id='competence' className="progressBar__all">
                <h2 className="progressBar__title">Compétences</h2>
                <div className='progressBar__block'>
                    <div className="progressBar__left">
                        {progressValues.map((item, index) => (
                            <div className="progressBar" key={index}>
                                <span className="progressBar__txt">{item.content}</span>
                                <div className="progressBar__bar">
                                    <div
                                        className="progressBar__fill"
                                        style={{
                                            width: `${item.progress}%`,
                                            backgroundColor: item.color, // Couleur dynamique
                                        }}
                                    ></div>
                                </div>
                                <p className="progressBar__value">{item.progress}%</p>
                            </div>
                        ))}

                    </div>
                    <div className="progressBar__right">
                        <Image />
                    </div>    
                </div>
            </div>
    );
}

export default ProgressBar;

