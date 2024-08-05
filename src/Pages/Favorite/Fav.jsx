import {} from 'react'
import { useTranslation } from 'react-i18next'
import { Row , Col, Card, Button } from 'react-bootstrap';
import '../Offers/Offers.style.css'
import { ErrorNotification, successNotification } from '../../Components/Notifications';
import { useEffect } from 'react';
import Api from '../../Config/api';
import { domain } from '../../Config/domain';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFav } from '../../Redux/Reducers/Favorite';



function Fav() {
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    let AllFavOffers = useSelector((state)=> state?.Favorite?.AllData)
    useEffect(()=>{
        dispatch(fetchAllFav())
    } , [])

    // console.log(AllFavOffers.data.wishlist.offers);
    let FavOffers = AllFavOffers?.data?.wishlist?.offers
    // console.log(FavOffers);
    


    const DeleteFromFav = (id)=>{
        try {
            Api.delete(`/wishlist/${id}`)
            .then((res)=>{
                console.log(res.data);
                successNotification("Offer Deleted Successfully From Favorite")
                dispatch(fetchAllFav())
            })
            .catch((e)=>{
                const errMsg = e?.response?.data?.message || e?.response?.data?.error
                console.log(errMsg);
                ErrorNotification(errMsg || "Add To Cart Not Completed !")
            })
        } catch (error) {
            ErrorNotification(error.message)
        }
    }

    const addToCart = (id) => {
        try {
            Api.post(`/carts/${id}`)
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

    return (
        <section
            className={i18n.language == 'en' ? "dirLtR" : "dirRtL"}
        >

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>  {t('YourFav')} </h1>
                <span className='headerSpan'></span>
            </div>

            <div className="containerUser">
                <div className="optionParent">
                    <Row>
                        {
                            i18n.language === 'en' ?
                                FavOffers?.map((item) => (
                                    <>
                                        <Col lg='4' md='6' sm='10' className='optionItem mb-3' >
                                            <Card style={{ width: "100%" }}>
                                                <Card.Header  className='FavHeader'>
                                                    {
                                                        item.categoryNameEn
                                                    }
                                                </Card.Header>
                                                <Card.Img src={domain + '/uploads/offers/' + item.images[item.images.length - 1 ]} className='optionImage' />
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
                                                        onClick={() => DeleteFromFav(item._id)}
                                                    >
                                                        Delete From Favorite
                                                    </Button>
                                                    <Button
                                                        variant='outline-success'
                                                        className='p-2 btnAdd'
                                                        name='offerId'
                                                        // value={offerCartID.offerId}
                                                        // onChange={handleOfferIdChange}
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
                                    FavOffers?.map((item) => (
                                        <>
                                            <Col lg='4' md='6' sm='10' className='optionItem mb-3' >
                                                <Card style={{ width: "100%" }}>
                                                <Card.Header className='FavHeader'>
                                                    {
                                                        item.categoryNameAr
                                                    }
                                                </Card.Header>
                                                    <Card.Img src={domain + '/uploads/offers/' + item.images[item.images.length - 1 ] } className='optionImage' />
                                                    <Card.Body>
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
                                                            onClick={() => DeleteFromFav(item._id)}
                                                        >
                                                            حذف من المفضلة
                                                        </button>
                                                        <button
                                                            className='p-2 btnAdd'
                                                            name='offerId'
                                                            // value={offerCartID.offerId}
                                                            // onChange={handleOfferIdChange}
                                                            onClick={() => addToCart(item._id)}
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

export default Fav