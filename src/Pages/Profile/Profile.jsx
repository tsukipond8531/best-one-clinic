import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../Contact US/Contact.style.css'
import './Profile.style.css'
import { Form, Container, Row, Button, Col } from 'react-bootstrap'
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { PiSubtitlesFill } from "react-icons/pi";
// import { FaPager } from "react-icons/fa";
import defaultImg from '../../../public/Images/defaultProfile.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUserData} from '../../Redux/Reducers/user'
import Api from '../../Config/api'
import {successNotification} from '../../Components/Notifications'
import {domain} from '../../Config/domain'



function Profile() {

    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const userData = useSelector((state)=> state.user.data)
    // console.log(userData.data.user);
    const imgControl = useRef()
    const handleChangeImage = () => {
        imgControl.current.click()
    }

    const [image, setImage] = useState(null)
    const fileUploadChange = (e) => {
        let file = e.target.files[0]
        setImage(file)
    }

    const [userValues , setUserValues] = useState({
        firstName : "",
        lastName : "",
        mobileNumber : "",
        gender : "",
        email : "",
        nationality : "",
        address : "",
        profilePicture : ""
    })
    useEffect(()=>{
        dispatch(fetchUserData())
        setUserValues(userData.data.user)
    }, [])

    // console.log(userData.data.user.profilePicture);
    

    const handleUserPatch = (e)=>{
        setUserValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmitUpdate = (e)=>{
        e.preventDefault()
        console.log(userValues);
        Api.patch(`/users/${userData.data.user._id}` , {
            ...userValues , 
            profilePicture : image || userValues.profilePicture
        } , {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })
        .then((res)=>{
            console.log(res.data);
            successNotification("Profile Updated Successfully ")
            dispatch(fetchUserData())
            
        })
        .catch((error)=>{
            const errMsg =
                    error?.response?.data?.message || error?.response?.data?.error;
                console.log(errMsg);
        })

    }
    return (
        <section className={
            i18n.language == 'en' ? "dirLtR" : "dirRtL"
        }>

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>{t('Profile')} </h1>
                <span className='headerSpan'></span>
            </div>

            <section className='profileParent containerUser'>
                <Container>
                    <div className="contactParent">
                        <Form onSubmit={handleSubmitUpdate}>
                            <Row>

                                <div className="ProfileImgBox">
                                    <div className="imgView">
                                        <img
                                            src={(image && URL.createObjectURL(image)) || (userData.data.user.profilePicture ? domain + '/uploads/users/'+ userData?.data?.user?.profilePicture  : defaultImg) }
                                            alt="profile img"
                                        />

                                        <div className="imageControl">
                                            <input
                                                type="file"
                                                name="profilePicture"
                                                id="image"
                                                style={{ display: "none" }}
                                                ref={imgControl}
                                                onChange={fileUploadChange}
                                            />

                                            <Button
                                                variant='secondary'
                                                className='btnChange'
                                                onClick={handleChangeImage}
                                            >
                                                {t('ChangeImage')}
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('firstName')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <FaUser /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <FaUser /> </span>
                                            }
                                            <Form.Control
                                                type="text"
                                                name='firstName'
                                                value={userValues.firstName}
                                                onChange={handleUserPatch}
                                                placeholder=''
                                                className='inputField'
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('lastName')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <FaUser /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <FaUser /> </span>
                                            }
                                            <Form.Control
                                                type="text"
                                                name='lastName'
                                                value={userValues.lastName}
                                                onChange={handleUserPatch}
                                                placeholder=''
                                                className='inputField'
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('YourPhone')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <FaPhoneAlt /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <FaPhoneAlt /> </span>
                                            }
                                            <Form.Control
                                                type="text"
                                                name='mobileNumber'
                                                value={userValues.mobileNumber}
                                                onChange={handleUserPatch}
                                                placeholder={t('placeholderPhone')}
                                                className='inputField'
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('YourEmail')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <MdMarkEmailRead /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <MdMarkEmailRead /> </span>
                                            }
                                            <Form.Control
                                                type="email"
                                                name='email'
                                                value={userValues.email}
                                                placeholder={t('placeholderEmail')}
                                                className='inputField'
                                                disabled
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('YourNationality')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <PiSubtitlesFill /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <PiSubtitlesFill /> </span>
                                            }
                                            <select
                                                className='inputField w-100 ms-3 me-3'
                                                name='nationality'
                                                value={userValues.nationality}
                                                onChange={handleUserPatch}
                                            >
                                                <option selected> {t('select')} </option>
                                                <option> {t('Saudi')} </option>
                                                <option>{t('NonSaudi')}</option>
                                            </select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('yourGender')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <PiSubtitlesFill /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <PiSubtitlesFill /> </span>
                                            }
                                            
                                            <select
                                                className='inputField w-100 ms-3 me-3'
                                                name='gender'
                                                value={userValues.gender}
                                                onChange={handleUserPatch}
                                            >
                                                <option selected> {t('select')} </option>
                                                <option> {t('Male')} </option>
                                                <option>{t('Female')}</option>
                                            </select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('yourCity')} </Form.Label>
                                        <div className="inputData">
                                            {
                                                i18n.language == 'en' &&
                                                <span className='inputIcon'> <PiSubtitlesFill /> </span>
                                            }
                                            {
                                                i18n.language == 'ar' &&
                                                <span className='inputIcon me-4'> <PiSubtitlesFill /> </span>
                                            }
                                            <Form.Control
                                                type="text"
                                                name='address'
                                                value={userValues.address}
                                                onChange={handleUserPatch}
                                                placeholder={t('placeholderSubject')}
                                                className='inputField'
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                
                                <Col lg='12' md='6' sm='10' className='inputParent d-flex justify-content-center'>
                                    <Button
                                        variant='outline-secondary'
                                        type='submit'
                                        className=' btnLogin btnSend'
                                    >
                                        {t('Update')}
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

export default Profile