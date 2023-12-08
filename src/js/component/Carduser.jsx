import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt, faMapPin, faAt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../store/appContext.js';

// Creo una CARD para usarla dentro de la vista de ContactList. con el Context y el map, rastreo todos los usuarios y los extraigo
// así, me creo una card por cada usuario que llame con el fetch a la api
// Este componente lo comparto dentro de Contact List
// Los  botones de trash y pencil, debo asignarles la actions que está en flux, donde una, sirve para EDITAR = PUT, y otra sirve para Borrar = DELETE (cuidado no la agenda solo id)


export const Carduser = () => {
    const { store, actions } = useContext(Context);
    const {user, Setuser}  = useState();
    const handleDeleteUser = (id) => {
        actions.deleteUsers(id);
    };

    return (
        <div className="container m-auto p-4">
            {/* <h1>USER CARD</h1> */}
            {store.agenda.map((item, index) => {
                console.log(item.id);
                return (
                    <div key={index} className="user-card">
                        <div className="card flex-row justify-content-between">
                            <img alt="" src={item.imgUrl || "https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg"} className="w-25" />
                            <div className="card-body">
                                <div className="m-3 d-flex">
                                    <div><h5>{item.full_name}</h5></div>
                                    <div className='ms-auto'>
                                        <FontAwesomeIcon icon={faTrash} className="m-1 mx-4"  onClick={() => handleDeleteUser(item.id)} />
                                        <Link to="/update-form">
                                        <FontAwesomeIcon icon={faPencilAlt} className="m-1" onClick={() => actions.currentContact(item)} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="justify-content-between text-black-50 m-4">
                                    <p className="font-weight-bold"><FontAwesomeIcon icon={faAt} /> {item.email}</p>
                                    <p className="font-weight-bold"><FontAwesomeIcon icon={faPhoneVolume} className="m-1"/> {item.phone}</p>
                                    <p className="font-weight-bold"><FontAwesomeIcon icon={faMapPin} className="m-1" /> {item.address}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};
