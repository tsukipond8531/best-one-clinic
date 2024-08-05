import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUserFav } from '../../Redux/Reducers/AllFavorite'
import { useNavigate } from 'react-router-dom';

// Old Syle
import { Row, Col, Card, Button } from 'react-bootstrap';
import '../../Pages/Offers/Offers.style.css'

import './ShowFav.style.css'

function AllUsersFav() {
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const AllUserFav = useSelector((state) => state?.AllUserFav?.AllData)

    // console.log(AllUserFav?.data);
    let AllData = AllUserFav?.data?.wishlists
    console.log(AllData);

    useEffect(() => {
        dispatch(fetchAllUserFav())

    }, [])


    const handleShowFav = (id) => {
        // console.log(id);
        naviagte(`/admin/allFav/item/${id}`)

    }


    return (
        <section
            className={i18n.language == 'en' ? "dirLtR" : "dirRtL"}
        >

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>  {t('allFav')} </h1>
                <span className='headerSpan'></span>
            </div>


            <div className="containerUser">
                <div className="optionParent">
                    <Row>
                        {
                            AllData?.map((item) => (
                                <>
                                    <Col lg='3' md='6' sm='10' className='mb-4'>
                                        <Card style={{ widows: "100%" }}>
                                            <Card.Header className='text-center p-3 favHeader' >
                                                {item.user.firstName + " " + item.user.lastName}
                                            </Card.Header>
                                            <Card.Body className=''>
                                                <Card.Title className='favText'> {t('phone')} :  <span>{item?.user?.mobileNumber ? item?.user?.mobileNumber : "لا يوجد حاليا"} </span></Card.Title>
                                                <Card.Title className='favText'> {t('email')}  : <span> {item?.user?.email} </span> </Card.Title>
                                                <Card.Title className='favText'> {t('favNum')}  : <span> {item.offers.length} </span>  </Card.Title>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Button
                                                    variant='outline-success'
                                                    className='w-100'
                                                    onClick={
                                                        () => handleShowFav(item._id)
                                                    }
                                                >
                                                    {t('showAllOffers')}
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

        </section>
    )
}

export default AllUsersFav


