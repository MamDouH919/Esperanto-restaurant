import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import Logo from '../img/logo.webp';

import { Image } from 'react-bootstrap';
import {Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
// import { LazyLoadImage } from "react-lazy-load-image-component";



function Layout() {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar expanded={expanded} className="justify-content-center shadow p-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='nav-container-content'>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" >
                    {expanded ? <BiX size={30} /> : <BiMenu size={30} />}
                </Navbar.Toggle>
                <Navbar.Brand>
                    <Image className='brand' width="100%" height="100%" src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-center align-items-center fs-6 text-center" style={{ flex: 1 }}>
                        <Link onClick={() => setExpanded(false)} className={"nav-link" + (url === "/" ? " active" : "")} to="/">
                            Home
                        </Link>
                        <Link onClick={() => setExpanded(false)} className={"nav-link" + (url === "/our-branches" ? " active" : "")} to="/our-branches">
                            Our Branches
                        </Link>
                        <Image className='logo-navbar' width={300} src={Logo} alt="Logo" />
                        <Link onClick={() => setExpanded(false)} className={"nav-link" + (url === "/menus" ? " active" : "")} to="/menus">
                            Menus
                        </Link>
                        <Link onClick={() => setExpanded(false)} className={"nav-link" + (url === "/contact" ? " active" : "")} to="/contact">
                            Contact & Reservations
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Layout;