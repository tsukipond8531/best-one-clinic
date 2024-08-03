import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { domain } from '../../Config/domain'
import { Row , Col , Button , Card  } from 'react-bootstrap'
import Api from '../../Config/api'

import { useDispatch , useSelector } from 'react-redux'
import { fetchOfferDetails } from '../../Redux/Reducers/Offers'
import { ErrorNotification, successNotification } from '../../Components/Notifications'
import { useNavigate } from 'react-router-dom'

function ShowAllOffer() {

    const {t , i18n } = useTranslation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchOfferDetails())
    } , [])
    let allOffers = useSelector((state)=> state?.Offers?.data)
    

    const UpdateOffer = (id)=>{
        navigate(`/admin/offer/update/${id}`)
    }

    const DeleteOffer = (id)=>{
        // console.log(id);
        Api.delete(`/offers/${id}`)
        .then((res)=>{
            console.log(res.data);
            successNotification("Offer Deleted !")
            dispatch(fetchOfferDetails())
        }).catch((error)=>{
            const errMsg =
                    error?.response?.data?.message || error?.response?.data?.error;
                // console.log(errMsg);
                ErrorNotification(errMsg)
        })

    }
    return (
        <section
            className={
                i18n.language == 'en' ? "dirLtR" : "dirRtL"
            }
        >

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>{t('showAllOffers')} </h1>
                <span className='headerSpan'></span>
            </div>

            <div className="containerUser">
                <div className="optionParent">
                    <Row>
                        {
                            i18n.language === 'en' ?
                                allOffers?.data?.offers?.map((item) => (
                                    <>
                                        <Col lg='3' md='6' sm='10' className='optionItem mb-3' >
                                            <Card style={{ width: "100%" }}>
                                                <Card.Img src={domain + '/uploads/offers/' + item.images[item.images.length - 1]} className='optionImage' />
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
                                                </Card.Body>
                                                <Card.Footer className='optionFooter'>
                                                    <Button
                                                        variant='outline-danger'
                                                        className='me-2 p-2 btnFav'
                                                        onClick={() => DeleteOffer(item._id)}

                                                    >
                                                        Delete Offer
                                                    </Button>
                                                    <Button
                                                        variant='outline-success'
                                                        className='p-2 btnAdd'
                                                        onClick={() => UpdateOffer(item._id)}

                                                    >
                                                        Update Offer
                                                    </Button>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    </>
                                )
                                )
                                :
                                (

                                    allOffers?.data?.offers?.map((item) => (
                                        <>
                                            <Col lg='3' md='6' sm='10' className='optionItem mb-3' >
                                                <Card style={{ width: "100%" }}>
                                                    <Card.Img src={domain + '/uploads/offers/' + item.images[item.images.length - 1]} className='optionImage' />
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
                                                    </Card.Body>
                                                    <Card.Footer className='optionFooter'>
                                                        <Button
                                                            variant='outline-danger'
                                                            className='me-2 p-2 btnFav'
                                                            onClick={() => DeleteOffer(item._id)}

                                                        >
                                                            حذف العرض
                                                        </Button>
                                                        <Button
                                                            variant='outline-success'
                                                            className='p-2 btnAdd'
                                                            onClick={() => UpdateOffer(item._id)}

                                                        >
                                                            تعديل العرض
                                                        </Button>
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

export default ShowAllOffer