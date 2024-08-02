import { useEffect } from 'react'
import './ShowComlaints.style.css'
import { useTranslation } from 'react-i18next'
import { Card, Col, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllComplaints } from '../../Redux/Reducers/allComplaints'
import Api from '../../Config/api'
import { successNotification } from '../../Components/Notifications'

function ShowComplaints() {
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllComplaints())
    }, [])
    const allComplaints = useSelector((state) => state.allComplaints.AllData)
    // console.log(allComplaints.data.complaints);
    let allComplaintsItems = allComplaints?.data?.complaints


    const handleDeletedComplaint = (id)=>{
        console.log(id);
        Api.delete(`/complaints/${id}`)
        .then((res)=>{
            console.log(res.data);
            successNotification("Complaint Deleted Successfully !")
            dispatch(fetchAllComplaints())
        })
        .catch((error)=>{
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
                <h1 className='text-center sectionTitle'>{t('allComplaints')} </h1>
                <span className='headerSpan'></span>
            </div>

            <section className='allComplaints-parent containerUser'>
                <Row>
                    {
                        allComplaintsItems?.map((item) => (
                            <>
                                <Col lg='6' md='6' sm='12' className='mb-4 ' key={item.id}>
                                    <Card style={{ width: "100%" }} className='itemStyle'>
                                        <Card.Header className='allComplaints-header'>
                                            {t('from') + "  |  " + item.name}
                                        </Card.Header>
                                        <Card.Header className='allComplaints-header'>
                                            {t('email') + "  |  " + item.email}
                                        </Card.Header>
                                        <Card.Header className='allComplaints-header'>
                                            {t('phone') + "  |  " + item.mobileNumber}
                                        </Card.Header>
                                        <Card.Header className='allComplaints-header'>
                                            {t('subject') + "  |  " + item.subject}
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Title className='allComplaints-header'>
                                                {t('msg')}
                                            </Card.Title>
                                            <hr />
                                            <Card.Text className='msgText'>
                                                {item.message}
                                            </Card.Text>
                                        </Card.Body>

                                        <Card.Footer className=''>
                                            <Button
                                                variant='danger w-100 p-2'
                                                onClick={()=>handleDeletedComplaint(item._id)}
                                            >
                                                Delete
                                            </Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </>
                        ))
                    }
                </Row>
            </section>

        </section>


    )
}

export default ShowComplaints