function Banner({ image, alt }) {
    return (
        <div className="banner">
            <img className="banner__img" src={image} alt={alt} />
            {/* <h3 className="banner__txt"> {texte}</h3> */}
        </div>
    );
}

export default Banner;
