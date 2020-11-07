import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">🅸🅽🆂🆃🅰🅶🆁🅰🅼</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="row-reverse" />
                <Navbar.Collapse id="basic-navbar-nav" className="row-reverse">

                    {/* <Form > */}
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                    <div className="nav__buttons">
                        <Button size="lg" variant="outline-primary " >LogIn</Button>
                        <Button variant="outline-primary " className="mx-2">SignUp</Button>
                    </div>
                    {/* </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

// export default Navbar