import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUserFav } from '../../Redux/Reducers/AllFavorite'
import { useParams } from 'react-router-dom'
import { Card , Col , Row  } from 'react-bootstrap'
import { domain } from '../../Config/domain'

function UsersFav() {
    const {t , i18n} = useTranslation()
    const {favId} = useParams()
    const dispatch = useDispatch()
    const AllUserFav = useSelector((state) => state?.AllUserFav?.AllData)
    
    useEffect(()=> {
        dispatch(fetchAllUserFav())
    } , [])
    // console.log(AllUserFav?.data?.wishlists);
    let AllData = AllUserFav?.data?.wishlists
    let favItem = AllData.find((item)=> item._id == favId)         
    
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
                            i18n.language === 'en' ?
                                favItem.offers?.map((item) => (
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
                                            </Card>
                                        </Col>
                                    </>
                                )
                                )
                                :
                                (
                                    favItem.offers?.map((item) => (
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

export default UsersFav