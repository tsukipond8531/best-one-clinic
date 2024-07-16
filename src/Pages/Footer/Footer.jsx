import { Col, Container, Image, Row } from 'react-bootstrap';
// import FooterImg from "../Tools/Imgs/Footer_img.png"
import { FaFacebookF } from "react-icons/fa6";
import { VscTwitter } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import './Footer.css'
import teamLogo from '../../../public/Images/logo.png'
import FooterShape from '../../Components/FooterShape';

function Footer() {

    const navigate = useNavigate()

    return (
        <>
            <footer className='footer-section'>
                <div className="shipe">
                    <FooterShape />
                </div>
                <div className='footer-partOne pt-3 pb-3'>
                    <Container fluid>
                        <Row>
                            <Col lg='4' sm='8' data-aos="zoom-in">
                                <div className='footer-img' data-aos="flip-left">
                                    <Image src={teamLogo} width={100} height={100} />
                                </div>
                                <p className='footer-img-text' data-aos="flip-right">
                                    Better Beauty Clinic includes a distinguished group of consultants and specialists who have the highest international certificates to meet the needs of customers exceptionally so that they are fully satisfied with the quality of services and distinctive prices
                                </p>
                            </Col>

                            <Col lg='4' sm='8' data-aos="flip-left">

                                <div className='footer-sitemap'>
                                    <h3>Sitmap</h3>
                                    <ul>
                                        <li onClick={() => navigate('/')}>Cases before and after</li>
                                        <li onClick={() => navigate('/')}>Devices</li>
                                        <li onClick={() => navigate('/')}>About Us</li>
                                        <li onClick={() => navigate('/')}>Contact Us</li>
                                        <li onClick={() => navigate('/')}>Complaints</li>
                                        <li onClick={() => navigate('/')}>Requests </li>
                                        <li onClick={() => navigate('/')}>Terms and Conditions </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg='4' sm='8' data-aos="flip-left">
                                <div className='footer-connect'>
                                    <h3>Connect</h3>
                                    <div className='socailIcons'>
                                        <span className='socialIcon'> <FaFacebookF /></span>
                                        <span className='socialIcon'> <VscTwitter /></span>
                                        <span className='socialIcon'><FaLinkedinIn /></span>
                                        <span className='socialIcon'><MdEmail /></span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* Part Two */}
                <div className='footer-partTwo'>
                    <Row>
                        <Col lg='12'>

                            <p className='text-center'>
                                &copy; 2024 Best One Clinic. All rights reserved.
                            </p>

                        </Col>
                    </Row>
                </div>
            </footer>
        </>
    )
}

export default Footer