import { } from 'react'

import "./Offers.css"
import { Col, Container, Row } from 'react-bootstrap'
import imageOffer from '../../../public/Images/off-1.jpg'

import { getImageUrl, offerData } from '../../assets/Data Of Pages/Main.data'
import { useNavigate } from 'react-router-dom'
function Offers() {

    const navigate = useNavigate()
    const offerHandler = (id) => {
        navigate(`/offer/option/${id}`)
    }


    return (
        <section className='pt-5'>
            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>Our Offers </h1>
                <span className='headerSpan'></span>
            </div>

            <section className='offers'>
                <Container>
                    <Row>
                        {
                            offerData.map((item) => (
                                <>
                                    <Col lg='4' md='6' sm='10' className='offerParent mb-3' key={item.id}>
                                        <div className="offerItem">
                                            <img src={getImageUrl(item.img)} alt="" />
                                            <div className="offerContent">
                                                <h3>
                                                    {
                                                        item.title
                                                    }
                                                </h3>
                                                <button onClick={() => offerHandler(item.id)}>
                                                    Show Offers
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            ))
                        }
                    </Row>
                </Container>
            </section>

        </section>
    )
}

export default Offers