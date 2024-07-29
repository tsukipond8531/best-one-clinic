import { } from 'react'
import { Col, Row } from 'react-bootstrap'

import aboutImg from '../../../public/Images/about.png'
import './AboutUs.css'
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

import { useTranslation } from 'react-i18next';



function AboutUs() {
    const { t, i18n } = useTranslation()

    return (
        <section className='pt-5 aboutBg'>

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'> {t('aboutUs')} </h1>
                <span className='headerSpan'></span>
            </div>


            <div
                className={
                    i18n.language=='ar' ? "aboutContent dirRtL" : "aboutContent dirLtR"
                }>
                <div className='containerUser'>
                    <Row >
                        <Col lg='6' md='12' sm='12' className='aboutContent-data'>
                            {
                                i18n.language === 'en' && <span> <ImQuotesLeft />  </span>
                            }
                            {
                                i18n.language === 'ar' && <span> <ImQuotesRight />  </span>
                            }
                            <h1> {t('aboutTitle')} </h1>
                            <p> {t('aboutText')} </p>
                        </Col>

                        <Col lg='6' md='12' sm='12' className=' aboutContent-image'>
                            <div className="aboutImgBox">
                                <img src={aboutImg} alt="about " />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </section>
    )
}

export default AboutUs