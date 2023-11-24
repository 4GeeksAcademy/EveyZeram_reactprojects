import Button from 'react-bootstrap/Button';
import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext.js';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
// para utilizar store de flux 
// 1º Importar hook useCOntext
// 2º Importar Context de js
// 3º Dentro de (este) componente desestructurar store y actions 
// desde el hook (Contex)


export const Contact = () => {
// Antes del return, debemos establecer 
const {store, actions } = useContext(Context)
// si haces un console.log(store.cohorte) debería salir el dato de flux


// expresión de JS entre {}

    return (
        <div>
        <nav className="navbar navbar-light bg-light mb-3 p-2">
        <Link to="/">
        <span className="navbar-brand mb-0 h1">{store.cohorte}</span>
      </Link>
        </nav>
        <div className="p-4 col-6 m-auto">
            <h2 className="text-center"><strong>Add a new contact</strong></h2>
            <Form className="text-start">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control placeholder="Full Name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder="Enter Phone" />
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Enter address" />
                    <div className="d-grid gap-2">
                        <Button className="my-2" variant="success" type="submit">
                            save
                        </Button>
                    </div>
                    <div>
                        <Link to="/Contact-list">or get back to contacts</Link>
                    </div>
                </Form.Group>
            </Form>
        </div>
        </div>
    );
}
