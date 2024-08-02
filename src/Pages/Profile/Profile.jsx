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

    useEffect(()=>{
        dispatch(fetchUserData())
    }, [])

    const [userValues , setUserValues] = useState({
        firstName : userData.data.user.firstName,
        lastName : userData.data.user.lastName,
        phone : userData.data.user.phone,
        gender : userData.data?.user?.gender,
        email : userData.data.user.email,
    })

    const handleUserPatch = ()=>{

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
                        <Form onSubmit="">
                            <Row>

                                <div className="ProfileImgBox">
                                    <div className="imgView">
                                        <img
                                            src={(image && URL.createObjectURL(image)) || defaultImg}
                                            alt="profile img"
                                        />

                                        <div className="imageControl">
                                            <input
                                                type="file"
                                                name="image"
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
                                                value={userValues.phone}
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
                                            {/* <Form.Control
                                                type="text"
                                                placeholder={t('placeholderSubject')}
                                                className=''
                                            /> */}
                                            <select
                                                className='inputField w-100 ms-3 me-3'
                                                name='nationality'
                                                // value={updateValue.gender}
                                                // onChange={handleUpdateChange}
                                            >
                                                <option> {t('Saudi')} </option>
                                                <option>{t('NonSaudi')}</option>
                                            </select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg='6' md='6' sm='10' className='inputParent'>
                                    <Form.Group className="mb-3 groupParent" >
                                        <Form.Label className='inputLabel'> {t('yourgender')} </Form.Label>
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
                                                value={userValues.gender}
                                                // onChange={handleUpdateChange}
                                            >
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