import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt, faMapPin, faAt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../store/appContext.js';

export const Carduser = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container m-auto p-4">
            {/* <h1>USER CARD</h1> */}
            {store.users.map((item, index) => {
                return (
                    <div key={index} className="user-card">
                        <div className="card flex-row justify-content-between">
                            <img alt="" src={item.imgUrl || "https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg"} className="w-25" />
                            <div className="card-body">
                                <div className="m-3 d-flex">
                                    <div><h5>{item.name}</h5></div>
                                    <div className='ms-auto'>
                                        <FontAwesomeIcon icon={faTrash} className="m-1 mx-4" size="3px" />
                                        <FontAwesomeIcon icon={faPencilAlt} className="m-1" size="3px" />
                                    </div>
                                </div>
                                <div className="justify-content-between text-black-50 m-4">
                                    <p className="font-weight-bold"><FontAwesomeIcon icon={faAt} size="3px" /> {item.email}</p>
                                    <p className="font-weight-bold"><FontAwesomeIcon icon={faPhoneVolume} className="m-1" size="2px" /> {item.phone}</p>
                                    <p className="font-weight-bold"><FontAwesomeIcon icon={faMapPin} className="m-1" size="2px"/> {item.address.street}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};
{/* <div>
    <img src="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg" className="card-img-top m-auto w-25" alt="user"></img>
</div>
<div>
</div>
<div className="text-end m-1">
    
    <div className="m-3">
        <Link to="#" className="btn btn-primary">Details</Link>
    </div>
</div> */}

<img alt="" src="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg" class="w-25"></img>