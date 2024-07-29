import { } from 'react'
import { useTranslation } from 'react-i18next'
import './Contact.style.css'
import { Row, Col, Form, Container, Button } from 'react-bootstrap'
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { PiSubtitlesFill } from "react-icons/pi";
// import { RiMessage2Fill } from "react-icons/ri";
import Footer from '../Footer/Footer';


function Complaints() {
    const { t, i18n } = useTranslation()


    const handleContactUs = (e) => {
        e.preventDefault()
        console.log("Submit Contact Us");
    }

    return (
        <section 
            className={
                i18n.language=='en' ? "dirLtR" : "dirRtL"
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
                                        as="textarea"
                                        rows={5}
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

            {/* Start Footer Section */}
            <Footer />
            {/* End Footer Section */}

        </section>
    )
}

export default Complaints

