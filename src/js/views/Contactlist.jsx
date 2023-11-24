import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { Carduser } from '../component/Carduser.jsx';
// Arriba importamos

// Establecemos las variables constantes que van a ir cambiando (props no, params sí)


export const Contactlist = () => {

   return (
    <div>
      <nav className="navbar navbar-light bg-light mb-3 p-2">
        <Link to="/"><span className="navbar-brand mb-0 h1">Home</span></Link>
        {/* Botón para crear un contacto que nos lleva alformulario */}
        <Link to="/contacts">
          <button className="btn btn-warning">Create a New Contact</button>
        </Link>
      </nav>
      <div className="container display-flex m-auto">
        <h3>Contact List</h3>
        <Carduser/>
      </div>
    </div>
  );
}
