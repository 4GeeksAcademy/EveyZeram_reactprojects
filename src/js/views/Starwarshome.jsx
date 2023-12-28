import React from "react";
import starwarshome from "../../img/StarwarsHome.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { NavbarSW } from "../component/NavbarSW.jsx";


export const Starwarshome = () => {
  return (
    <>
      {/* <nav className="navbar bg-body-tertiary bg-warning text-white">

        <div className="container">
          <Link className="navbar-brand" href="/starwars-home">
            <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/8261.png" alt="Bootstrap" width="50" height="50" />
          </Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link active text-secondary" aria-current="page" to="/characters">Characters</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary" to="/planets">Planets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary" to="/starships">Starships</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary" aria-disabled="true">Favorites<FontAwesomeIcon icon={faJedi} /></Link>
            </li>
          </ul>
        </div>
      </nav> */}
      <NavbarSW />
      <div className="justify-content-center">
        <img className="w-100" src={starwarshome} />
      </div>
    </>
  );
}