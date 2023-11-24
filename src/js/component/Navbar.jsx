import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-light bg-light mb-0">
      <Link to="/">
        <span className="navbar-brand p-2 mb-0 h1">Home</span>
      </Link>
      <div className="container-fluid justify-content-end">
      <div className="m-2">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Projects
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/todolist">Todo List</Dropdown.Item>
          <Dropdown.Item href="/contact-list">Contact List</Dropdown.Item>
          <Dropdown.Item href="/contacts">Contacts</Dropdown.Item>
          <Dropdown.Item href="/starwars">Star Wars's Blog</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">Template</button>
        </Link>
      </div>
      </div>
    </nav>
    </div>
  );
};

