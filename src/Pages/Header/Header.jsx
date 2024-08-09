// import { useEffect, useState } from 'react'

import './Header.css'
import { Container, Form, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../public/Images/logo.png'
import Dropdownlist from '../../Components/DropDown';
import { useTranslation } from 'react-i18next';
import { ImCart } from "react-icons/im";
import { FaHeart } from "react-icons/fa6";
// Import Api Files
import { fetchUserData } from '../../Redux/Reducers/user'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Userlogout } from '../../Redux/Reducers/user'

function Header() {
    // Define variables
    const navigate = useNavigate()
    const [t, i18n] = useTranslation()

    const changed = (lng) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    // Handle Backend Data
    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.user.isLogin)
    const user = useSelector((state) => state?.user?.data)
    // console.log(user.data.user.role);
    // console.log(isLogin);
    // const cartCounter = useSelector((state) => state.counter.CartValue)
    // const favCounter = useSelector((state) => state.counter.FavValue)

    // Fetch User Data
    useEffect(() => {
        dispatch(fetchUserData())
    }, [])


    // handle Logout
    const handleLogout = () => {
        dispatch(Userlogout())
        navigate('/home')
        navigate(0)
    }
    return (
        // <Navbar expand="lg" className={scrolled ? "bgColor nav-height" : "bg-body-tertiary nav-height"} fixed='top'>
        <Navbar
            expand="lg"
            className={
                i18n.language === 'ar' ? "nav-height bg-body-tertiary dirRtL" : "nav-height bg-body-tertiary dirLtR"
            }

        >


            <Container fluid>
                <Navbar.Brand href="/" className='brandLogo'>
                    <img src={logo} alt="logo" width={75} height={60} />
                </Navbar.Brand>

                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                <button className="navbar-toggler btn-responsive collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>


                <Navbar.Collapse
                    id="navbarScroll"
                    className='nav-small'

                >
                    {/* User View */}
                    <Nav
                        className={
                            i18n.language === 'ar' ? "me-auto my-2 my-lg-0 linksBlock dirRtL linksBlockAr" : "me-auto my-2 my-lg-0 linksBlock dirLtR"
                        }
                        navbarScroll
                    >
                        <Nav.Link >
                            <NavLink to='/home'> {t('Home')} </NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink to='/services'>{t('services')}</NavLink>
                        </Nav.Link>
                        { (!isLogin || user?.data?.user?.role == 'user') ?
                            <Nav.Link >
                                <NavLink to='/offers'> {t('Offers')} </NavLink>
                            </Nav.Link>
                            : (
                                <Nav.Link >
                                    <NavLink to='/admin/showAllOffers'> {t('Offers')} </NavLink>
                                </Nav.Link>
                            )
                        }
                        <Nav.Link >
                            <NavLink to='/devices'> {t('Devices')} </NavLink>
                        </Nav.Link>
                        {/* Start Dropdown */}
                        <div className="dropStyle">
                            <Dropdownlist />
                        </div>
                        {/* End Dropdown */}
                    </Nav>


                    {/* Admin View */}




                    <Form className="d-flex formStyle">
                        {!isLogin &&
                            <Button
                                variant="outline-secondary"
                                onClick={() => navigate('/login')}
                                className='btnLogin me-2 ms-2 smView'
                            >
                                {t('Login')}
                            </Button>
                        }

                        {
                            isLogin && user?.data?.user?.role == 'user' &&
                            <>
                                
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => navigate('/cart')}
                                    className="btnLogin me-2 ms-2 dirLtR btnCart smView"
                                >
                                    <span className='me-2'> <ImCart />  </span>   
                                </Button>
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => navigate('/favorite')}
                                    className="btnLogin me-2 ms-2 dirLtR btnCart smView"
                                >
                                    <span className='me-2'> <FaHeart />  </span> 
                                </Button>
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => navigate('/profile')}
                                    className='btnLogin me-2 ms-2 smView'
                                >
                                    {t('Profile')}
                                </Button>
                            </>
                        }
                        {
                            i18n.language !== 'ar' && (
                                <Button variant="me-2  btnLogin translate smView" onClick={() => changed('ar')}>Arabic</Button>
                            )
                        }

                        {
                            i18n.language !== 'en' && (
                                <Button variant="me-2 btnLogin translate tran-en smView" onClick={() => changed('en')}>English</Button>
                            )
                        }
                        {
                            isLogin &&
                            <>
                                <Button
                                    variant="outline-secondary"
                                    onClick={handleLogout}
                                    className="btnLogin me-2 ms-2 smView"
                                >
                                    {t('logout')}
                                </Button>
                            </>
                        }
                    </Form>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default Header
