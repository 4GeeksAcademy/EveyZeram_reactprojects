import React from "react";
import reactImage from "../../img/react.png";
import "../../styles/home.css";

// Recuerda siempre importar Link si lo usas
import { Link } from "react-router-dom";
import { Navbar } from "../component/Navbar.jsx";




export const Home = () => {
	return (
		<div>
			<Navbar/>
		<div className="text-center mt-5 p-2">
			<h1>Welcome to my React Projects!</h1>
		{/* <ul>
			Proyectos Actuales
		<li><Link to="/contact-list">Lista de contactos</Link></li>
		<li><Link to="/contacts">Crear Contacto Formulario </Link></li>
		
		
		</ul>
		 */}
		<p>
						<img src={reactImage} />
		</p>
		<Link to="/" className="btn btn-info">
			If you want to see a project Check the Navbar upside
		</Link>
	</div>
		</div>
);
	};