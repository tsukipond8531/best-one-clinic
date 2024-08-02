import { useEffect, useRef, useState } from 'react'
import './CreateOffer.style.css'
import { useTranslation } from 'react-i18next'
import { Col, Row, Form, Container, Button } from 'react-bootstrap'
import { BiSolidCategory } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import './CreateOffer.style.css'
import '../../Pages/Contact US/Contact.style.css'
import Api from '../../Config/api';
import { successNotification } from '../../Components/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOfferDetails } from '../../Redux/Reducers/Offers';
import { useParams } from 'react-router-dom';
import { domain } from '../../Config/domain';



function UpdateOffer() {
    const { id } = useParams()
    const { t, i18n } = useTranslation()
    const imageUpload = useRef()
    const dispatch = useDispatch()
    const offersData = useSelector((state) => state.Offers.data)
    console.log(offersData);
    let AllOffers = offersData?.data?.offers
    // console.log(AllOffers);
    console.log(id);
    const offer = AllOffers?.find((item) => item._id === id)
    // console.log(offer);
    useEffect(() => {
        dispatch(fetchOfferDetails())
        setOfferInputs(offer)
    }, [])
    const handleAddImage = () => {
        imageUpload.current.click()
    }

    const [image, setImage] = useState(null)
    const fileUploadChange = (e) => {
        let file = e.target.files[0]

        setImage(file)
        setOfferInputs({
            ...offerInputs,
            images: file
        })
    }

    const [offerInputs, setOfferInputs] = useState({
        nameEn: "",
        nameAr: "",
        category: "",
        descriptionEn: "",
        descriptionAr: "",
        price: Number,
        discount: "",
        images: "",
        availabilityStatus: ""
    })

    const HandleChangeOffers = (e) => {
        setOfferInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const handleOfferSubmit = (e) => {
        e.preventDefault()
        // console.log(offerInputs);
        Api.patch(`/offers/${id}` , {
            ...offerInputs , 
            images : image || offerInputs.images
        } , {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data);
                successNotification('Offer Updated Successfully ❤️')
            })
            .catch((error) => {
                const errMsg =
                    error?.response?.data?.message || error?.response?.data?.error;
                console.log(errMsg);
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
                <h1 className='text-center sectionTitle'>{t('updateOffer')} </h1>
                <span className='headerSpan'></span>
            </div>

            <section className='createOffer-Parent'>
                <Container>
                    <div className="contactParent">
                        <Form onSubmit={handleOfferSubmit}>
                            <Row>

                                <Col lg='12' md='12' sm='12' className='inputParent mb-5'>
                                    <div className="createImage">
                                        <div className="createImageUpload">
                                            <img src={(image && URL.createObjectURL(image)) || domain + "/uploads/offers/" + offerInputs?.images[0]} alt="" />
                                        </div>
                                    </div>
                                </Col>

                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('nameEn')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <MdOutlineProductionQuantityLimits /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <MdOutlineProductionQuantityLimits /> </span>
                                            }
                                            <Form.Control
                                                type="text"
                                                name='nameEn'
                                                value={offerInputs.nameEn}
                                                onChange={HandleChangeOffers}
                                                placeholder={t('placeholderName')}
                                                className='inputField'
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('nameAr')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <MdOutlineProductionQuantityLimits /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <MdOutlineProductionQuantityLimits /> </span>
                                            }
                                            <Form.Control
                                                type="text"
                                                name='nameAr'
                                                value={offerInputs.nameAr}
                                                onChange={HandleChangeOffers}
                                                placeholder={t('placeholderName')}
                                                className='inputField'
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('category')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <BiSolidCategory /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <BiSolidCategory /> </span>
                                            }
                                            <select
                                                className='inputField w-100 ms-3 me-3'
                                                name='category'
                                                value={offerInputs.category}
                                                onChange={HandleChangeOffers}

                                            >
                                                <option>Laser</option>
                                                <option>Skin_and_Body_Lightening</option>
                                                <option>Cosmetic</option>
                                                <option>Freshness_Injection</option>
                                                <option>Dermatological</option>
                                                <option>Hair</option>
                                                <option>Exclusive</option>
                                                <option>Disclosure_Consultation</option>
                                            </select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('availabilityStatus')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <BiSolidCategory /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <BiSolidCategory /> </span>
                                            }
                                            <select
                                                className='inputField w-100 ms-3 me-3'
                                                name='availabilityStatus'
                                                value={offerInputs.availabilityStatus}
                                                onChange={HandleChangeOffers}
                                            >
                                                <option> Available </option>
                                                <option>Unavailable </option>
                                            </select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('descEn')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <MdOutlineDescription /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <MdOutlineDescription /> </span>
                                            }
                                            <Form.Control
                                                type="text"
                                                name='descriptionEn'
                                                value={offerInputs.descriptionEn}
                                                onChange={HandleChangeOffers}
                                                placeholder={t('placeholderEmail')}
                                                className='inputField'
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('descAr')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <MdOutlineDescription /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <MdOutlineDescription /> </span>
                                            }
                                            <Form.Control
                                                type="text"
                                                name='descriptionAr'
                                                value={offerInputs.descriptionAr}
                                                onChange={HandleChangeOffers}
                                                placeholder={t('placeholderEmail')}
                                                className='inputField'
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('price')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <IoIosPricetags /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <IoIosPricetags /> </span>
                                            }
                                            <Form.Control
                                                type="text"
                                                name='price'
                                                value={offerInputs.price}
                                                onChange={HandleChangeOffers}
                                                placeholder={t('placeholderSubject')}
                                                className='inputField'
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('discount')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <RiDiscountPercentFill /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <RiDiscountPercentFill /> </span>
                                            }
                                            <Form.Control
                                                type="text"
                                                name='discount'
                                                value={offerInputs.discount}
                                                onChange={HandleChangeOffers}
                                                placeholder={t('placeholderSubject')}
                                                className='inputField'
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='12' md='12' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('uploadImage')} </Form.Label>
                                        <div className="inputIcon">

                                            <Form.Control
                                                type="file"
                                                className='inputField'
                                                style={{ display: "none" }}
                                                ref={imageUpload}
                                                name='images'
                                                onChange={fileUploadChange}

                                            />
                                            <Button
                                                variant='secondary'
                                                className='btnUpload'
                                                onClick={handleAddImage}

                                            >
                                                {t('uploadImage')}
                                            </Button>
                                        </div>
                                    </Form.Group>
                                </Col>

                                <Col lg='12' md='6' sm='10' className='inputParent d-flex justify-content-center'>
                                    <Button
                                        variant='outline-secondary'
                                        type='submit'
                                        className=' btnLogin btnSend'
                                    >
                                        {t('Send')}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Container>

            </section>

        </section>
    )
}

export default UpdateOffer