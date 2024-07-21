import { } from 'react'
import { useParams } from 'react-router-dom'
import { offerData } from '../../assets/Data Of Pages/Main.data'
import Footer from '../Footer/Footer';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './Offers.style.css'
// import optionImage from '../../../public/Images/optionLaser1.jpg'
import { getImageUrl } from '../../assets/Data Of Pages/Main.data';


function OfferOption() {

    const { i18n } = useTranslation()
    const { id } = useParams()
    console.log(id);
    let data = offerData.find((item) => item.id == id)
    console.log(data);


    return (
        <section >

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                {i18n.language == 'en' && <h1 className='text-center sectionTitle' > {data.titleEN} </h1>}
                {i18n.language == 'ar' && <h1 className='text-center sectionTitle' > {data.titleAr} </h1>}
                <span className='headerSpan'></span>
            </div>

            <div className="containerUser">
                <div className="optionParent">
                    <Row>
                        {/* English */}
                        {i18n.language === 'en' &&
                            data.offerDetails.map((item) => (
                                <>
                                    <Col lg='3' md='6' sm='10' className='optionItem mb-3' key={item.id}>
                                        <Card style={{ width: "100%" }}>
                                            <Card.Img src={getImageUrl(item.image)} className='optionImage' />
                                            <Card.Body>
                                                <Card.Title className='optionTitle'>
                                                    {item.titleEn}
                                                </Card.Title>
                                                <Card.Text className='optionDescription'>
                                                    {item.descriptionEn}
                                                </Card.Text>
                                                <Card.Title className='optionTitle'>
                                                    {item.price} SAR
                                                </Card.Title>
                                            </Card.Body>
                                            <Card.Footer className='optionFooter'>
                                                <Button
                                                    variant='outline-danger'
                                                    className='me-2 p-2 btnFav'
                                                >
                                                    Add To Favoriate
                                                </Button>
                                                <Button
                                                    variant='outline-success'
                                                    className='p-2 btnAdd'
                                                >
                                                    Add To Cart
                                                </Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </>
                            )
                            )
                        }

                        {/* Arabic */}
                        {i18n.language === 'ar' &&
                            data.offerDetails.map((item) => (
                                <>
                                    <Col lg='3' md='6' sm='10' className='optionItem mb-3' key={item.id}>
                                        <Card style={{ width: "100%" }}>
                                            <Card.Img src={getImageUrl(item.image)} className='optionImage' />
                                            <Card.Body>
                                                <Card.Title className='optionTitle'>
                                                    {item.titleAr}
                                                </Card.Title>
                                                <Card.Text className='optionDescription'>
                                                    {item.descriptionAr}
                                                </Card.Text>
                                                <Card.Title className='optionTitle'>
                                                    {item.price} ريال سعودي
                                                </Card.Title>
                                            </Card.Body>
                                            <Card.Footer className='optionFooter'>
                                                <Button
                                                    variant='outline-danger'
                                                    className='me-2 p-2 btnFav'
                                                >
                                                    Add To Favoriate
                                                </Button>
                                                <Button
                                                    variant='outline-success'
                                                    className='p-2 btnAdd'
                                                >
                                                    Add To Cart
                                                </Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </>
                            )
                            )
                        }
                    </Row>
                </div>
            </div>


            {/* Start Footer */}
            <Footer />
            {/* End Footer */}
        </section>
    )
}

export default OfferOption