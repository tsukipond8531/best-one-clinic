import { } from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Card, Button } from 'react-bootstrap';
import '../Offers/Offers.style.css'
import { ErrorNotification, successNotification } from '../../Components/Notifications';
import { useEffect } from 'react';
import Api from '../../Config/api';
import { domain } from '../../Config/domain';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../Redux/Reducers/Cart';


function Cart() {
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCart())
    } , [])
    const CartItems = useSelector((state)=> state.Cart.AllData)
    // console.log(CartItems.data.cart.items)
    let cartData = CartItems?.data?.cart?.items
    console.log(cartData);
    
    // console.log(cartData[0].offer);



    const DeleteFromCart = (id)=>{
        try {
            Api.delete(`/carts/${id}`)
            .then((res)=>{
                console.log(res.data);
                successNotification('Offer Deleted From Cart Successfully ')
                dispatch(fetchCart())
            })
            .catch((e)=>{
                const errMsg = e?.response?.data?.message || e?.response?.data?.error
                console.log(errMsg);
                ErrorNotification(errMsg || "Deleted From Cart Not Completed !")
            })
        } catch (error) {
            ErrorNotification(error.message)
        }

    }


    return (
        <section
            className={i18n.language == 'en' ? "dirLtR" : "dirRtL"}
        >

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>  {t('YourCart')} </h1>
                <span className='headerSpan'></span>
            </div>

            <div className="containerUser">
                <div className="optionParent">
                    <Row>
                        {
                            i18n.language === 'en' ?
                                cartData?.map((item) => (
                                    <>
                                        <Col lg='4' md='6' sm='10' className='optionItem mb-3' >
                                            <Card style={{ width: "100%" }}>
                                                <Card.Header  className='FavHeader'>
                                                    {
                                                        item.offer.category
                                                    }
                                                </Card.Header>
                                                <Card.Img src={domain + '/uploads/offers/' + item.offer.images[item.offer.images.length - 1 ]} className='optionImage' />
                                                <Card.Body>
                                                    <Card.Title className='optionTitle'>
                                                        {item.offer.nameEn}
                                                    </Card.Title>
                                                    <Card.Text className='optionDescription'>
                                                        {item.offer.descriptionEn}
                                                    </Card.Text>
                                                    <Card.Title className='optionTitle'>
                                                        {item.offer.price} SAR
                                                    </Card.Title>
                                                    <Card.Title className='optionTitle'>
                                                        Discount :  {item.offer.discount} %
                                                    </Card.Title>
                                                </Card.Body>
                                                <Card.Footer className='optionFooter'>
                                                    <Button
                                                        variant='outline-danger'
                                                        className='me-2 p-2 btnFav'
                                                        onClick={() => DeleteFromCart(item.offer._id)}
                                                    >
                                                        Delete From Cart
                                                    </Button>
                                                    <Button
                                                        variant='outline-success'
                                                        className='p-2 btnAdd'
                                                        name='offerId'
                                                        // value={offerCartID.offerId}
                                                        // onChange={handleOfferIdChange}
                                                        // onClick={() => addToCart(item._id)}

                                                    >
                                                        Add To Cart
                                                    </Button>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    </>
                                )
                                )
                                :
                                (
                                    cartData?.map((item) => (
                                        <>
                                            <Col lg='4' md='6' sm='10' className='optionItem mb-3' >
                                                <Card style={{ width: "100%" }}>
                                                <Card.Header className='FavHeader'>
                                                    {
                                                        item.offer.category
                                                    }
                                                </Card.Header>
                                                    <Card.Img src={domain + '/uploads/offers/' + item.offer.images[item.offer.images.length - 1 ] } className='optionImage' />
                                                    <Card.Body>
                                                        <Card.Title className='optionTitle'>
                                                            {item.offer.nameAr}
                                                        </Card.Title>
                                                        <Card.Text className='optionDescription'>
                                                            {item.offer.descriptionAr}
                                                        </Card.Text>
                                                        <Card.Title className='optionTitle'>
                                                            {item.offer.price} ريال سعودي
                                                        </Card.Title>
                                                        <Card.Title className='discount'>
                                                        الخصم :  {item.offer.discount} %
                                                    </Card.Title>
                                                    </Card.Body>
                                                    <Card.Footer className='optionFooter'>
                                                        <button
                                                            className='me-2 p-2 btnFav'
                                                            onClick={() => DeleteFromCart(item.offer._id)}
                                                        >
                                                            حذف من السلة
                                                        </button>
                                                        <button
                                                            className='p-2 btnAdd'
                                                            name='offerId'
                                                            // value={offerCartID.offerId}
                                                            // onChange={handleOfferIdChange}
                                                            // onClick={() => addToCart(item._id)}
                                                        >
                                                            أضافة الي السلة
                                                        </button>
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        </>
                                    )
                                    )
                                )
                        }
                    </Row>
                </div>
            </div>

        </section>
    )
}

export default Cart