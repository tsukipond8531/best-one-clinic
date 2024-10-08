import { useParams } from 'react-router-dom'
import { offerData } from '../../assets/Data Of Pages/Main.data'
import { useTranslation } from 'react-i18next';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './Offers.style.css'
// import optionImage from '../../../public/Images/optionLaser1.jpg'
import { ErrorNotification, successNotification } from '../../Components/Notifications';
import { useEffect, useState } from 'react';
import Api from '../../Config/api';
import { domain } from '../../Config/domain';

function OfferOption() {

    const { i18n } = useTranslation()
    const { category } = useParams()
    // console.log(category);
    let data = offerData.find((item) => item.category == category)
    // console.log(data);


    // console.log();
    const [offerDetails, setOfferDetails] = useState([])
    useEffect(() => {
        try {
            Api.get(`/offers?category=${category}`)
                .then((res) => {
                    // console.log(res.data);
                    setOfferDetails(res?.data?.data?.offers)
                    // console.log(offerDetails[0].images[0]);
                })
                .catch((e) => {
                    const errMsg = e?.response?.data?.message || e?.response?.data?.error
                    // console.log(errMsg);
                    ErrorNotification(errMsg || "!")
                })
        } catch (error) {
            ErrorNotification(error.message)
        }
    }, [])


    const [offerCartID, setOfferCartID] = useState({
        offerId: null
    })

    const handleOfferIdChange = (e) => {
        setOfferCartID((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const addToCart = (id) => {
        try {
            Api.post(`/carts/${id}`, offerCartID)
                .then((res) => {
                    console.log(res.data);
                    successNotification('Your Offer Added To Cart Successfully !')
                }).catch((e) => {
                    const errMsg = e?.response?.data?.message || e?.response?.data?.error
                    console.log(errMsg);
                    ErrorNotification(errMsg || "Add To Cart Not Completed !")
                })
        } catch (error) {
            ErrorNotification(error.message)
        }


    }

    const addToFav = (id) => {
        // console.log(id);
        try {
            Api.post(`/wishlist/${id}`)
                .then((res) => {
                    console.log(res.data);
                    successNotification("Your Offer Added To Favorite Successfully !")
                })
                .catch((e) => {
                    const errMsg = e?.response?.data?.message || e?.response?.data?.error
                    console.log(errMsg);
                    ErrorNotification(errMsg || "Add To Favorite Not Completed !")
                })
        } catch (error) {
            ErrorNotification(error.message)

        }

        successNotification('Your Offer Added To Favorite Successfully !')

    }

    return (
        <section
            className={
                i18n.language == 'en' ? "dirLtR" : "dirRtL"
            }
        >

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                {i18n.language == 'en' && <h1 className='text-center sectionTitle' > {data.titleEN} </h1>}
                {i18n.language == 'ar' && <h1 className='text-center sectionTitle' > {data.titleAr} </h1>}
                <span className='headerSpan'></span>
            </div>

            <div className="containerUser">
                <div className="optionParent">
                    <Row>
                        {
                            i18n.language === 'en' ?
                                offerDetails.map((item) => (
                                    <>
                                        <Col lg='4' md='6' sm='10' className='optionItem mb-3' >
                                            <Card style={{ width: "100%" }}>
                                                <div className="offerImg">
                                                    <Card.Img src={domain + '/uploads/offers/' + item.images[item.images.length - 1]} className='optionImage' />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title className='optionTitle'>
                                                        {item.nameEn}
                                                    </Card.Title>
                                                    <Card.Text className='optionDescription'>
                                                        {item.descriptionEn}
                                                    </Card.Text>
                                                    <Card.Title className='optionTitle'>
                                                        {item.price} SAR
                                                    </Card.Title>
                                                    <Card.Title className='discount'>
                                                        Discount :  {item.discount} %
                                                    </Card.Title>
                                                </Card.Body>
                                                <Card.Footer className='optionFooter'>
                                                    <Button
                                                        variant='outline-danger'
                                                        className='me-2 p-2 btnFav'
                                                        onClick={() => addToFav(item._id)}

                                                    >
                                                        Add To Favoriate
                                                    </Button>
                                                    <Button
                                                        variant='outline-success'
                                                        className='p-2 btnAdd'
                                                        name='offerId'
                                                        value={offerCartID.offerId}
                                                        onChange={handleOfferIdChange}
                                                        onClick={() => addToCart(item._id)}

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

                                    offerDetails.map((item) => (
                                        <>
                                            <Col lg='4' md='6' sm='10' className='optionItem mb-3' >
                                                <Card style={{ width: "100%" }}>
                                                    <div className="optionImg">
                                                        <Card.Img src={domain + '/uploads/offers/' + item.images[item.images.length - 1]} className='optionImage' />
                                                    </div>                                                    <Card.Body>
                                                        <Card.Title className='optionTitle'>
                                                            {item.nameAr}
                                                        </Card.Title>
                                                        <Card.Text className='optionDescription'>
                                                            {item.descriptionAr}
                                                        </Card.Text>
                                                        <Card.Title className='optionTitle'>
                                                            {item.price} ريال سعودي
                                                        </Card.Title>
                                                        <Card.Title className='discount'>
                                                            الخصم :  {item.discount} %
                                                        </Card.Title>
                                                    </Card.Body>
                                                    <Card.Footer className='optionFooter'>
                                                        <button
                                                            className='me-2 p-2 btnFav'
                                                            onClick={() => addToFav(item._id)}

                                                        >
                                                            Add To Favoriate
                                                        </button>
                                                        <button
                                                            className='p-2 btnAdd'
                                                            name='offerId'
                                                            value={offerCartID.offerId}
                                                            onChange={handleOfferIdChange}
                                                            onClick={() => addToCart(item._id)}

                                                        >
                                                            Add To Cart
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

export default OfferOption