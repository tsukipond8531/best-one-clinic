// import { useEffect, useState } from 'react'

import './Header.css'
import { Container, Form, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../public/Images/logo.png'
import Dropdownlist from '../../Components/DropDown';
import { useTranslation } from 'react-i18next';


function Header() {
    // Define variables
    const navigate = useNavigate()
    const [ , i18n] = useTranslation()

    const changed = (lng) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };


    return (
        // <Navbar expand="lg" className={scrolled ? "bgColor nav-height" : "bg-body-tertiary nav-height"} fixed='top'>
        <Navbar expand="lg" className="nav-height bg-body-tertiary" >
            <Container fluid>
                <Navbar.Brand href="/home" className='brandLogo'>
                    <img src={logo} alt="logo" width={75} height={60} />
                </Navbar.Brand>

                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                <button className="navbar-toggler btn-responsive collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>


                <Navbar.Collapse id="navbarScroll" className='nav-small'>
                    <Nav
                        className="me-auto my-2 my-lg-0 linksBlock"
                        // style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link >
                            <NavLink to='/home'>Home </NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink to='/services'>Services</NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink to='/offers'>Offers </NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink to='/devices'>Devices </NavLink>
                        </Nav.Link>

                        {/* Start Dropdown */}
                        <div className="dropStyle">
                            <Dropdownlist />
                        </div>
                        {/* End Dropdown */}

                    </Nav>


                    <Form className="d-flex formStyle">


                        <Button
                            variant="outline-secondary"
                            onClick={() => navigate('/login')}
                            className='btnLogin me-2'
                        >
                            Login
                        </Button>

                        {
                            i18n.language !== 'ar' && (
                                <Button variant="me-2 btnLogin translate" onClick={() => changed('ar')}>Ar</Button>
                            )
                        }

                        {
                            i18n.language !== 'en' && (
                                <Button variant="me-2 btnLogin translate tran-en" onClick={() => changed('en')}>En</Button>
                            )
                        }
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default Header

{/* <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 seacrhStyle"
                            aria-label="Search"
                        />
                        <Button
                            variant="outline-success"
                            className='me-2 btnSearch'
                        >
                            Search
                        </Button> */}