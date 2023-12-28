import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";


export const NavbarSW = () => {
  const { store, actions } = useContext(Context);
  const myFavorites = store.favorites;
  return (
    <nav className="navbar bg-body-tertiary bg-warning text-white">
      <div className="container">
        <Link className="navbar-brand" to="/starwars-home">
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
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="position-sticky top-0 m-1 badge bg-white text-danger">{myFavorites.length}</span>
              Favorites <FontAwesomeIcon icon={faJedi} />
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              {myFavorites.length === 0 ? (
                 <li><span className="dropdown-item">Favorites Selected No</span></li>
              ) : (
                myFavorites.map((item) => (
                  <li key={item.id} className="d-flex">
                  <span className="dropdown-item"><li>{item.name}</li></span>
                  <span onClick = {() => actions.removeFavorite(item, myFavorites) } ><FontAwesomeIcon className="m-auto p-2" icon={faTrash} style={{ color: "#ff2d2d" }} /></span>
                </li>
                  ))
                )}
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  )
}