import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
            <Navbar.Brand>Fitness GYM</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
                <Nav>
                    {user?.email?
                    <Button variant='dark' onClick={logOut}>Logout</Button> :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }   
                
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">{user?.displayName}</a>
                </Navbar.Text>
                </Navbar.Collapse>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        
    );
    }

export default Header;