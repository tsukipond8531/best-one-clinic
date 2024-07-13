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
                                <span> <ImQuotesLeft/>  </span>
                                <h1>Best One Clinic </h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ratione, repellat, aut blanditiis cum consequuntur maiores dignissimos a dolorum consectetur, fuga pariatur! Id totam deserunt numquam dignissimos explicabo. Provident repudiandae consectetur fugiat fugit, quis omnis adipisci officiis assumenda odit necessitatibus deserunt porro sequi veniam nemo. Consequatur consectetur voluptates, maxime eaque et quasi, aliquam, ipsum odio deleniti debitis officia laborum error.</p>
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