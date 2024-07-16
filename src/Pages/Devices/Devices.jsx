import { } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Devices.css'
import BtnReadMore from '../../Components/BtnReadMore'
import { devicesData, getImageUrl } from '../../assets/Data Of Pages/Main.data'
import Footer from '../Footer/Footer'
function Devices() {



    return (
        <section className='pt-5'>
            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'> Our Devices </h1>
                <span className='headerSpan'></span>
            </div>


            <Container>
                <Row>
                    {
                        devicesData.map((item) => (
                            <>
                                <Col lg='4' md='6' sm='10' className='mb-4'>
                                    <Card style={{ width: "100%" }} className='devCard' key={item.id}>
                                        <Card.Img variant='top' src={getImageUrl(item.image)} className='devImages' />

                                        <Card.Body className='dev-content'>
                                            <Card.Title className='devTitle'> {item.title}</Card.Title>
                                            <Card.Text className='dev-text'>
                                                {item.text}
                                                <BtnReadMore content={item.ReadMore} />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        ))
                    }

                </Row>
            </Container>


            {/* Start Footer */}
            <Footer />
            {/* End Footer */}
        </section>
    )
}

export default Devices

