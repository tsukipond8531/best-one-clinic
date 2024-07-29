import { } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Devices.css'
import BtnReadMore from '../../Components/BtnReadMore'
import { devicesData, getImageUrl } from '../../assets/Data Of Pages/Main.data'
import { useTranslation } from 'react-i18next'




function Devices() {

    const { t, i18n } = useTranslation()

    return (
        <section

            className={
                i18n.language=='en' ? "dirLtR" : "dirRtL"
            }
        >
            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'> {t('OurDevices')} </h1>
                <span className='headerSpan'></span>
            </div>


            <Container>
                <Row>
                    {/* Start English Content */}
                    {i18n.language === 'en' &&
                        devicesData.map((item) => (
                            <>
                                <Col lg='4' md='6' sm='10' className='mb-3 m-auto '>
                                    <Card style={{ width: "100%" }} className='devCard' key={item.id}>
                                        <Card.Img variant='top' src={getImageUrl(item.image)} className='devImages' />

                                        <Card.Body className='dev-content'>
                                            <Card.Title className='devTitle'> {item.titleEN}</Card.Title>
                                            <Card.Text className='dev-text'>
                                                {item.textEn}
                                                <BtnReadMore content={item.ReadMoreEN} />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        ))
                    }

                    {/* Start Arabic Content */}
                    {i18n.language === 'ar' &&
                        devicesData.map((item) => (
                            <>
                                <Col lg='4' md='6' sm='10' className='mb-4 m-auto '>
                                    <Card style={{ width: "100%" }} className='devCard' key={item.id}>
                                        <Card.Img variant='top' src={getImageUrl(item.image)} className='devImages' />

                                        <Card.Body className='dev-content'>
                                            <Card.Title className='devTitle'> {item.titleAr}</Card.Title>
                                            <Card.Text className='dev-text'>
                                                {item.textAr}
                                                <BtnReadMore content={item.ReadMoreAr} />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        ))
                    }


                </Row>
            </Container>


        </section>
    )
}

export default Devices

