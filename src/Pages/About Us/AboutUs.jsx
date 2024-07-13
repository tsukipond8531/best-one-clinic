import { } from 'react'
import { Col, Row } from 'react-bootstrap'

import aboutImg from '../../../public/Images/9082599.jpg'
import './AboutUs.css'
import { ImQuotesLeft } from "react-icons/im";
function AboutUs() {


    return (
        <section className='pt-5'>

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>About Us </h1>
                <span className='headerSpan'></span>
            </div>


            <div className="aboutContent">
                <div className='containerUser'>
                    <Row >
                        <Col lg='6' md='12' sm='12' className='aboutContent-data'>
                            <span> <ImQuotesLeft />  </span>
                            <h1>Best One Clinic </h1>
                            <p>The best medical beauty clinic offers everything related to the field of dermatology, beauty and laser to serve the honourable people of Jeddah                                </p>
                            <p>
                                Better Beauty Clinic includes a distinguished group of consultants and specialists who have the highest international certificates to meet the needs of customers exceptionally so that they are fully satisfied with the quality of services and distinctive prices
                            </p>
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