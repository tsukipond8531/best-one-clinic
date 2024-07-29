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
import { useTranslation } from 'react-i18next';

function Footer() {

    const navigate = useNavigate()
    const { t, i18n } = useTranslation()

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
                                    <Image src={teamLogo} width={120} height={120} />
                                </div>
                                <p className='footer-img-text' data-aos="flip-right">
                                    {t('aboutText')}
                                </p>
                                <p className='footer-img-text' data-aos="flip-right">
                                    {t('aboutText2')}
                                </p>
                            </Col>

                            <Col lg='4' sm='8' data-aos="flip-left" className='sitemapParent'>

                                <div className={
                                    i18n.language==='ar' ? "footer-sitemap  " : "footer-sitemap "
                                }>
                                    <h3>{t('Sitemap')}</h3>
                                    <ul
                                        className={
                                            i18n.language==='ar' ? "text-center" : ""
                                        }
                                    >
                                        <li onClick={() => navigate('/')}>{t('afterBefore')}</li>
                                        <li onClick={() => navigate('/')}>{t('Devices')}</li>
                                        <li onClick={() => navigate('/')}>{t('aboutUs')} </li>
                                        <li onClick={() => navigate('/')}>{t('Contact')}</li>
                                        <li onClick={() => navigate('/')}>{t('Complaints')}</li>
                                        {/* <li onClick={() => navigate('/')}>{t('')} </li> */}
                                        <li onClick={() => navigate('/')}>{t('TermsandConditions')} </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg='4' sm='8' data-aos="flip-left">
                                <div className='footer-connect'>
                                    <h3>{t('Connect')}</h3>
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
                        {
                            i18n.language === 'ar' &&
                            <Col lg='12'>
                                <p className='text-center'>
                                    &copy; {t('aboutTitle')} . جميع الحقوق محفوظه
                                </p>
                            </Col>
                        }
                        {
                            i18n.language === 'en' &&
                            <Col lg='12'>
                                <p className='text-center'>
                                    &copy; 2024 Best One Clinic. All rights reserved.
                                </p>
                            </Col>
                        }
                    </Row>
                </div>
            </footer>
        </>
    )
}

export default Footer