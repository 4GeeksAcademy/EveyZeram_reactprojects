import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Detailscard = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

    useEffect(() => {
        actions.getCharactersDetail(params.idCharacter);
    }, []);

    return (
        <div>
            <h1>Details</h1>
            <Link className="navbar-brand" to="/characters">
                <img
                    src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/8261.png"
                    alt="Bootstrap"
                    width="50"
                    height="50"
                />
            </Link>
            <div className="container bg-dark">
                <div className="card mb-3  bg-dark text-light">
                    <div className="row g-0">
                        <div className="col-md-7 col-lg-6 col-xl-5">
                            <img src={`${imgUrl}${params.idCharacter}.jpg`} className="card-img-top w-100 h-100" alt="..." />
                        </div>
                        <div className="col-md-5 col-lg-6 col-xl-7">
                            <div className="card-body">

                                {/* <h3>{params.idCharacter}</h3> */}
                                <h1>{store.detailCharacter.properties.name}</h1>
                                <p><strong>Height: {store.detailCharacter.properties.name.height} </strong></p>
                                <p><strong>Mass: </strong> {store.detailCharacter.properties.nameproperties.mass} </p>
                                <p><strong>Hair color: </strong> {store.detailCharacter.properties.name.properties.hair_color}</p>
                                <p><strong>Skin color: </strong> {store.detailCharacter.properties.name.skin_color}</p>
                                <p><strong>Eye color: </strong> {store.detailCharacter.properties.name.eye_color}</p>
                                <p><strong>Birth year: </strong> {store.detailCharacter.properties.name.birth_year}</p>
                                <p><strong>Gender: </strong> {store.detailCharacter.properties.name.properties.gender} </p>

                                {/* Si no funciona: */}
                                {/* <h1>{store.detailCharacter && store.detailCharacter.properties && store.detailCharacter.properties.name}</h1>
                                <p><strong>Height: {store.detailCharacter && store.detailCharacter.properties && store.detailCharacter.properties.height} </strong></p>
                                <p><strong>Mass: </strong> {store.detailCharacter && store.detailCharacter.properties && store.detailCharacter.properties.mass} </p>
                                <p><strong>Hair color: </strong> {store.detailCharacter && store.detailCharacter.properties && store.detailCharacter.properties.hair_color}</p>
                                <p><strong>Skin color: </strong> {store.detailCharacter && store.detailCharacter.properties && store.detailCharacter.properties.skin_color}</p>
                                <p><strong>Eye color: </strong> {store.detailCharacter && store.detailCharacter.properties && store.detailCharacter.properties.eye_color}</p>
                                <p><strong>Birth year: </strong> {store.detailCharacter && store.detailCharacter.properties && store.detailCharacter.properties.birth_year}</p>
                                <p><strong>Gender: </strong> {store.detailCharacter && store.detailCharacter.properties && store.detailCharacter.properties.gender} </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
