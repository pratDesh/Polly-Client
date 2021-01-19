import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';

class Navigation extends Component {
    constructor(props){
        super(props);

    }

    render() {

        let menuItems;

        if(this.props.isAuthenticated){
            menuItems = [
                <NavDropdown.Item>Current User</NavDropdown.Item>,
                <NavDropdown.Divider />,
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>,
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            ];
        }
        else{
            menuItems = [
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>,
                <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
            ];
        }

        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Polly</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            {menuItems}
                        </NavDropdown>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation

