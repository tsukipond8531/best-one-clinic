import { } from 'react'

import "./Offers.style.css"
import { Col, Row } from 'react-bootstrap'
// import imageOffer from '../../../public/Images/off-1.jpg'

import { getImageUrl, offerData } from '../../assets/Data Of Pages/Main.data'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function Offers() {

    const navigate = useNavigate()
    const offerHandler = (id) => {
        navigate(`/offer/option/${id}`)
    }

    const {t , i18n} = useTranslation()


    return (
        <section 
            className={
                i18n.language=='en' ? "dirLtR" : "dirRtL"
            }
        >

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>{ t('OurOffers')} </h1>
                <span className='headerSpan'></span>
            </div>


            <section className='offers'>
                <div className='containerUser'>
                    <Row>
                        { i18n.language=='en' &&
                            offerData.map((item) => (
                                <>
                                    <Col lg='4' md='6' sm='10' className='offerParent mb-3 ' key={item.id}>
                                        <div className="offerItem">
                                            <img src={getImageUrl(item.img)} alt="" />
                                            <div className="offerContent">
                                                <h3>
                                                    {
                                                        item.titleEN
                                                    }
                                                </h3>
                                                <button onClick={() => offerHandler(item.id)}>
                                                    {t('showOffer')}
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            ))
                        }

                        { i18n.language=='ar' &&
                            offerData.map((item) => (
                                <>
                                    <Col lg='4' md='6' sm='10' className='offerParent mb-3 ' key={item.id}>
                                        <div className="offerItem">
                                            <img src={getImageUrl(item.img)} alt="" />
                                            <div className="offerContent">
                                                <h3>
                                                    {
                                                        item.titleAr
                                                    }
                                                </h3>
                                                <button onClick={() => offerHandler(item.id)}>
                                                        { t('showOffer')}
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            ))
                        }
                    </Row>
                </div>
            </section>


            
        </section>
    )
}

export default Offers