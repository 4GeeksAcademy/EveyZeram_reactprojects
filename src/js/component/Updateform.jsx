import Button from 'react-bootstrap/Button';
import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext.js';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from '../component/Spinner.jsx';
// para utilizar store de flux 
// 1º Importar hook useCOntext
// 2º Importar Context de js
// 3º Dentro de (este) componente desestructurar store y actions 
// desde el hook (Contex)


export const Updateform = () => {
    // Antes del return, debemos establecer 
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const currentContact = store.currentContact;
    console.log(currentContact);
    // si haces un console.log(store.cohorte) debería salir el dato de flux
    // console.log(store.agenda);
    // Tenemos que añadir los useState de cada campo, para poder usarlos y modificarlos
    const [name, setName] = useState(store.currentContact.full_name); // Si existe el contacto entonces traes los valores que tiene currentContact
    const [address, setAddress] = useState(store.currentContact.address); // 
    const [phone, setPhone] = useState(store.currentContact.phone); // 
    const [email, setEmail] = useState(store.currentContact.email);

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/contact-list');
    };

    const handleupdateUsers = () => {
        const updatedContactData = {
            full_name: name,
            address: address,
            phone: phone,
            email: email,
            agenda_slug: 'evey_agenda'
        };
        console.log('Updating contact with data:', updatedContactData);
        actions.updateUsers(updatedContactData);
    };

    // expresión de JS entre {}

    return (
        <div>
            <nav className="navbar navbar-light bg-light mb-3 p-2">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">{store.cohorte}</span>
                </Link>
            </nav>
            <div className="p-4 col-6 m-auto">
                <h2 className="text-center"><strong>Edit The Contact Here</strong></h2>
                {!store.currentContact ? <Spinner /> :
                    <Form className="text-start" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control placeholder="Full Name" onChange={(e) => setName(e.target.value)} value={name} />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control placeholder="Enter Phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
                            <Form.Label>Address</Form.Label >
                            <Form.Control placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} value={address} />
                            <div className="d-grid gap-2 d-flex justify-content-center">
                                <Button className="my-2" variant="success" type="submit" onClick={handleupdateUsers}  >Save</Button>
                                <Button className="my-2" variant="warning" type="reset">Reset</Button>
                            </div>
                            <div>
                                <Link to="/contact-list">or get back to contacts</Link>
                            </div>
                        </Form.Group>
                    </Form>
                }
            </div>
        </div>
    );
}
