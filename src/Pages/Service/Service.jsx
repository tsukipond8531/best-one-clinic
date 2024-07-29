import { } from 'react'

import './Service.style.css'
import { Row, Col, Card } from 'react-bootstrap'
import { serverData, getImageUrl } from '../../assets/Data Of Pages/Main.data'
import { useTranslation } from 'react-i18next'
import BtnReadMore from '../../Components/BtnReadMore'

function Service() {

    const { t, i18n } = useTranslation()


    return (
        <section className="">

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'> {t('OurServices')} </h1>
                <span className='headerSpan'></span>
            </div>

            <div className="containerUser">
                <div
                    className={
                        i18n.language == 'en' ? "servicesParent dirLtR" : "servicesParent dirRtL"
                    }
                >

                    <Row>
                        {/* English Content */}
                        {i18n.language === 'en' &&
                            serverData.map((item) => (
                                <>
                                    <Col lg='3' md='6' sm='10' className='serviceItem mb-3' key={item.id}>
                                        <Card className='serviceCard'>
                                            <Card.Img src={getImageUrl(item.image)} className='serviceImg' />

                                            <Card.Body>
                                                <Card.Title className=' serviceTitle'>
                                                    {item.titleEn}
                                                </Card.Title>
                                                <Card.Title className='serviceSubTitle'>
                                                    {item.subTitleEn}
                                                </Card.Title>
                                                <Card.Text>
                                                    {item.contentEn}
                                                    <BtnReadMore content={item.contentReadmoreEn} />
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                </>
                            ))
                        }

                        {/* Arabic Content */}

                        {i18n.language === 'ar' &&
                            serverData.map((item) => (
                                <>
                                    <Col lg='3' md='6' sm='10' className='serviceItem mb-3' key={item.id}>
                                        <Card className='serviceCard'>
                                            <Card.Img src={getImageUrl(item.image)} className='serviceImg' />

                                            <Card.Body>
                                                <Card.Title className=' serviceTitle'>
                                                    {item.titleAr}
                                                </Card.Title>
                                                <Card.Title className='serviceSubTitle'>
                                                    {item.subTitleAr}
                                                </Card.Title>
                                                <Card.Text>
                                                    {item.contentAr}
                                                    <BtnReadMore content={item.contentReadmoreAr} />
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                </>
                            ))
                        }

                    </Row>
                </div>
            </div>

        </section>
    )
}

export default Service