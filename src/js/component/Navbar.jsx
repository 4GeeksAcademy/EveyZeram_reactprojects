import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

export const Navbar = () => {
  return (

    <nav className="navbar navbar-light bg-warning mb-0">
      <Link to="/">
        <img className="w-25" src="https://4096122335-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-M5Xi81P40eOpcE8vFjA%2Favatar-1587574044163.png?generation=1587574044491154&alt=media" />
        <span className=" text-dark p-2 mb-0 h1">Home</span>
      </Link>
      <div className="justify-content-end d-flex">
        <div className="m-2">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Projects
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/starwars-home">Star Wars's Blog</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>

  );
};

