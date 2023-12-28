import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DetailscardPlanet = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const imgUrl = "https://starwars-visualguide.com/assets/img/planets/";

    useEffect(() => {
        actions.getPlanetsDetail(params.idPlanet);
    }, []);

    return (
        <div>
            <h1>Details</h1>
            <Link className="navbar-brand" to="/planets">To Planets Go Back</Link>
            <div className="container bg-dark">
                <div className="card mb-3  bg-dark text-light">
                    <div className="row g-0">
                        <div className="col-md-7 col-lg-6 col-xl-5">
                            <img src={`${imgUrl}${params.idPlanet}.jpg`} className="card-img-top w-100 h-100" alt="..." />
                        </div>
                        <div className="col-md-5 col-lg-6 col-xl-7">
                            <div className="card-body">

                              
                                <h1>{store.detailPlanet.properties.name}</h1>
                                <p><strong>Diameter: {store.detailPlanet.properties.diameter} </strong></p>
                                <p><strong>Rotation Period: </strong> {store.detailPlanet.properties.rotation_period} </p>
                                <p><strong>Terrain: </strong> {store.detailPlanet.properties.terrain}</p>
                                <p><strong>Orbital Period: </strong> {store.detailPlanet.properties.orbital_period}</p>
                                <p><strong>Gravity: </strong> {store.detailPlanet.properties.gravity}</p>
                                <p><strong>Population: </strong> {store.detailPlanet.properties.population}</p>
                                <p><strong>Climate: </strong> {store.detailPlanet.properties.climate} </p>

                                {/* Si no funciona: */}
                                {/* <h1>{store.detailPlanet && store.detailPlanet.properties && store.detailPlanet.properties.name}</h1>
                                <p><strong>Height: {store.detailPlanet && store.detailPlanet.properties && store.detailPlanet.properties.height} </strong></p>
                                <p><strong>Mass: </strong> {store.detailPlanet && store.detailPlanet.properties && store.detailPlanet.properties.mass} </p>
                                <p><strong>Hair color: </strong> {store.detailPlanet && store.detailPlanet.properties && store.detailPlanet.properties.hair_color}</p>
                                <p><strong>Skin color: </strong> {store.detailPlanet && store.detailPlanet.properties && store.detailPlanet.properties.skin_color}</p>
                                <p><strong>Eye color: </strong> {store.detailPlanet && store.detailPlanet.properties && store.detailPlanet.properties.eye_color}</p>
                                <p><strong>Birth year: </strong> {store.detailPlanet && store.detailPlanet.properties && store.detailPlanet.properties.birth_year}</p>
                                <p><strong>Gender: </strong> {store.detailPlanet && store.detailPlanet.properties && store.detailPlanet.properties.gender} </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
