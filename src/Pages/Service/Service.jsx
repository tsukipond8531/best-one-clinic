import { } from 'react'

import './Service.style.css'
import { Row, Col, Card } from 'react-bootstrap'
import { serverData, getImageUrl } from '../../assets/Data Of Pages/Main.data'
import Footer from '../Footer/Footer'
import { useTranslation } from 'react-i18next'
function Service() {

    const {i18n} = useTranslation()


    return (
        <section className="">
            
            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>Our Services </h1>
                <span className='headerSpan'></span>
            </div>

            <div className="containerUser">
                <div className="servicesParent">
                    <Row>
                        {/* English Content */}
                        { i18n.language==='en' &&
                            serverData.map((item) => (
                                <>
                                    <Col lg='3' md='6' sm='10' className='serviceItem mb-3' key={item.id}>
                                        <Card className='serviceCard'>
                                            <Card.Img src={getImageUrl(item.image)} className='serviceImg' />

                                            <Card.Body>
                                                <Card.Title className='text-center serviceTitle'>
                                                    {item.titleEn}
                                                </Card.Title>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                </>
                            ))
                        }
                        {/* Arabic Content */}

                        { i18n.language==='ar' &&
                            serverData.map((item) => (
                                <>
                                    <Col lg='3' md='6' sm='10' className='serviceItem mb-3' key={item.id}>
                                        <Card className='serviceCard'>
                                            <Card.Img src={getImageUrl(item.image)} className='serviceImg' />

                                            <Card.Body>
                                                <Card.Title className='text-center serviceTitle'>
                                                    {item.titleAr}
                                                </Card.Title>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                </>
                            ))
                        }


                    </Row>
                </div>
            </div>

            {/* Start Footer Section */}
            <Footer />
            {/* End Footer Section */}
        </section>
    )
}

export default Service