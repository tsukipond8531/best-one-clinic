import { } from 'react'

import './Products.css'
import { Row, Col, Card, Button } from 'react-bootstrap'
// import productImage from '../../../public/Images/product-1.jpg'
// import productImage2 from '../../../public/Images/product-11.jpg'

import { productData, getImageUrl } from '../../assets/Data Of Pages/Main.data'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
function Products() {

    const navigate = useNavigate()
    const handlePayment = (id)=>{
        navigate(`/product/payment/${id}`)
    }







    return (
        <section className='pt-2 productsStyle'>

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>Our Products </h1>
                <span className='headerSpan'></span>
            </div>

            <div className="containerUser">
                <div className="productsParent">
                    <Row>
                        {
                            productData.map((item) => (
                                <>
                                    <Col lg='3' md='6' sm='10' className='productCard mb-3' key={item.id}>
                                        <Card style={{ width: "100%" }} className='StyleProductCard'>
                                            <div className='img-wrapper' >
                                                <Card.Img src={getImageUrl(item.productImageOne)} variant='top' />
                                                <Card.Img src={getImageUrl(item.productImageTwo)} variant='top' className='img-overlay' />
                                            </div>
                                            <Card.Body>
                                                <Card.Title className='productTitle'>
                                                    {item.productTitle}
                                                </Card.Title>
                                                <Card.Text className='product-desc'>
                                                    {item.description}
                                                </Card.Text>
                                                <Card.Title>
                                                    {item.productPrice} SAR
                                                </Card.Title>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Button
                                                    variant='success'
                                                    className='w-100'
                                                    onClick={()=> handlePayment(item.id)}
                                                >
                                                    Pay Now
                                                </Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </>
                            ))
                        }
                    </Row>
                </div>
            </div>

            {/* Start Footer */}
            <Footer/>
            {/* End Footer */}
        </section>
    )
}

export default Products