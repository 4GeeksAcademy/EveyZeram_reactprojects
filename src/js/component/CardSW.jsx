import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardSW = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid w-18 m-auto p-3">
            {store.people.map((item, index) => {
                console.log(item.id);
                return (
                    <div key={index} className="card">
                        <img src="" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <Link to="/characters-details" className="btn btn-primary">
                                Details
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
