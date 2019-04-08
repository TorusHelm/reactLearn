import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

function HeaderMy() {
    return (
        <header className="header bg-warning">
            <Container>
                <Navbar variant="light" expand="lg">
                    <Navbar.Brand href="#home" className="font-weight-bold">TODO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Hello</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}

export default HeaderMy;