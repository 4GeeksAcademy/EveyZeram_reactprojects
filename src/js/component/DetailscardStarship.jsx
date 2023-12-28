import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DetailscardStarship = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const imgUrl = "https://starwars-visualguide.com/assets/img/starships/";

    useEffect(() => {
        actions.getdetailStarship(params.idStarship);
    }, []);

    return (
        <div>
            <h1>Details</h1>
            <Link className="navbar-brand" to="/characters">To Starships Go Back</Link>
            <div className="container bg-dark">
                <div className="card mb-3  bg-dark text-light">
                    <div className="row g-0">
                        <div className="col-md-7 col-lg-6 col-xl-5">
                            <img src={`${imgUrl}${params.idStarship}.jpg`} className="card-img-top w-100 h-100" alt="..." />
                        </div>
                        <div className="col-md-5 col-lg-6 col-xl-7">
                            <div className="card-body">

                                {/* <h3>{params.idCharacter}</h3> */}
                                <h1>{store.detailStarship.properties.name}</h1>
                                <p><strong>Model: {store.detailStarship.properties.model} </strong></p>
                                <p><strong>Starship Class: </strong> {store.detailStarship.properties.starship_class} </p>
                                <p><strong>Manufacturer: </strong> {store.detailStarship.properties.manufacturer}</p>
                                <p><strong>Cost in Credits: </strong> {store.detailStarship.properties.cost_in_credits}</p>
                                <p><strong>Lenght: </strong> {store.detailStarship.properties.length}</p>
                                <p><strong>Crew: </strong> {store.detailStarship.properties.crew}</p>
                                <p><strong>Passengers: </strong> {store.detailStarship.properties.passengers} </p>

                                {/* Si no funciona: */}
                                {/* <h1>{store.detailStarship && store.detailStarship.properties && store.detailStarship.properties.name}</h1>
                                <p><strong>Height: {store.detailStarship && store.detailStarship.properties && store.detailStarship.properties.height} </strong></p>
                                <p><strong>Mass: </strong> {store.detailStarship && store.detailStarship.properties && store.detailStarship.properties.mass} </p>
                                <p><strong>Hair color: </strong> {store.detailStarship && store.detailStarship.properties && store.detailStarship.properties.hair_color}</p>
                                <p><strong>Skin color: </strong> {store.detailStarship && store.detailStarship.properties && store.detailStarship.properties.skin_color}</p>
                                <p><strong>Eye color: </strong> {store.detailStarship && store.detailStarship.properties && store.detailStarship.properties.eye_color}</p>
                                <p><strong>Birth year: </strong> {store.detailStarship && store.detailStarship.properties && store.detailStarship.properties.birth_year}</p>
                                <p><strong>Gender: </strong> {store.detailStarship && store.detailStarship.properties && store.detailStarship.properties.gender} </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
