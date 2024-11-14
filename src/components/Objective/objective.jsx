function Objective({ content }) {
    return (
        <div className="objective">
            <h3 className="objective__title">Objectif:</h3>
            {content.objective.map((item, index) => (
                    <p className="objective__txt" key={index}>* {item}</p>
            ))}
        </div>
    );
    // return (
    //     <div className="objective__txt"><p>{content.objective}</p></div>
    // );
}

export default Objective;