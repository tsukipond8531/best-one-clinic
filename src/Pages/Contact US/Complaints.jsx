import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Contact.style.css'
import { Row, Col, Form, Container, Button } from 'react-bootstrap'
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { PiSubtitlesFill } from "react-icons/pi";
import { ErrorNotification, successNotification } from '../../Components/Notifications';
// import { RiMessage2Fill } from "react-icons/ri";

// Import Api Files
import Api from '../../Config/api';


function Complaints() {
    const { t, i18n } = useTranslation()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        subject: "",
        message: "",
    })

    const handleChangeData = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const handleContactUs = (e) => {
        e.preventDefault()
        console.log("Submit Contact Us");
        try {
            Api.post('/complaints', formData)
                .then((res) => {
                    console.log(res.data);
                    successNotification("Your Complaint Submited Successfully ❤️")
                    setFormData({
                        name: "",
                        email: "",
                        mobileNumber: "",
                        subject: "",
                        message: "",
                    })
                })
                .catch((e) => {
                    const errMsg = e?.response?.data?.message || e?.response?.data?.error
                    console.log(errMsg);
                    ErrorNotification(errMsg || "Complaint Not Submited  !")
                })
        } catch (error) {
            ErrorNotification(error.message)
        }
        // console.log(formData);

    }

    return (
        <section
            className={
                i18n.language == 'en' ? "dirLtR" : "dirRtL"
            }
        >

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>{t('Complaints')} </h1>
                <span className='headerSpan'></span>
            </div>

            {/* Start Contact Us Section */}
            {/* <div className="containerUser"> */}
            <Container>
                <div className="contactParent">
                    <Form onSubmit={handleContactUs}>
                        <Row>
                            <Col lg='6' md='6' sm='10' className='inputParent'>
                                <Form.Group className="mb-3 groupParent" >
                                    <Form.Label className='inputLabel'> {t('YourName')} </Form.Label>
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
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChangeData}
                                            placeholder={t('placeholderName')}
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
                                            value={formData.mobileNumber}
                                            onChange={handleChangeData}
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
                                            value={formData.email}
                                            onChange={handleChangeData}
                                            placeholder={t('placeholderEmail')}
                                            className='inputField'
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col lg='6' md='6' sm='10' className='inputParent'>
                                <Form.Group className="mb-3 groupParent" >
                                    <Form.Label className='inputLabel'> {t('serviceComlaint')} </Form.Label>
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
                                            name='subject'
                                            value={formData.subject}
                                            onChange={handleChangeData}
                                            placeholder={t('placeholderSerComplaint')}
                                            className='inputField'
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col lg='12' md='6' sm='10' className='inputParent'>
                                <Form.Group className="mb-3 groupParent" >
                                    <Form.Label className='inputLabel'> {t('YourComplaints')}</Form.Label>
                                    <Form.Control
                                        rows={5}
                                        as="textarea"
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChangeData}
                                        placeholder={t('placeholderComplaint')}
                                        className='txtArea'
                                    />
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
            {/* </div> */}
            {/* End Contact Us Section */}


        </section>
    )
}

export default Complaints

