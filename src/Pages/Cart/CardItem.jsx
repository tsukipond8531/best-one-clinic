import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Button } from 'react-bootstrap';
import '../Offers/Offers.style.css'
import { ErrorNotification, successNotification } from '../../Components/Notifications';
import { } from 'react';
import Api from '../../Config/api';
import { domain } from '../../Config/domain';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../Redux/Reducers/Cart';
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import './Cart.style.css'


function CardItem(props) {
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()

    const [count, setCount] = useState(props.quantity)

    // const [inputQuantity, setInputQuantity] = useState({
    //     quantity: props.quantity
    // })

    let quantity = {
        quantity: props.quantity
    };

    const handleIncreaseQuantity = (id) => {
        // console.log(id);
        setCount((count) => count + 1)

        quantity.quantity = count + 1
        console.log(quantity);

        Api.patch(`/carts/${id}`, JSON.stringify(quantity), {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                console.log(res.data);
                console.log(quantity);
                dispatch(fetchCart())

            }).catch((e) => {
                const errMsg = e?.response?.data?.message || e?.response?.data?.error
                console.log(errMsg);
            })
    }



    const handleDicreaseQuantity = (id) => {
        console.log(id);
        quantity.quantity = count - 1
        console.log(quantity);
        if (quantity.quantity == 0) {
            quantity.quantity = count + 1
            ErrorNotification("Quantity Must be at least 1 ")
        } else {
            setCount((count) => count - 1)
            Api.patch(`/carts/${id}`, JSON.stringify(quantity), {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((res) => {
                    console.log(res.data);
                    console.log(quantity);
                    dispatch(fetchCart())

                }).catch((e) => {
                    const errMsg = e?.response?.data?.message || e?.response?.data?.error
                    console.log(errMsg);
                    ErrorNotification(errMsg)
                })
        }



    }



    const DeleteFromCart = (id) => {
        try {
            Api.delete(`/carts/${id}`)
                .then((res) => {
                    console.log(res.data);
                    successNotification('Offer Deleted From Cart Successfully ')
                    dispatch(fetchCart())
                })
                .catch((e) => {
                    const errMsg = e?.response?.data?.message || e?.response?.data?.error
                    console.log(errMsg);
                    ErrorNotification(errMsg || "Deleted From Cart Not Completed !")
                })
        } catch (error) {
            ErrorNotification(error.message)
        }

    }

    return (
        <>
            <Col lg='10' md='6' sm='10' className=' mb-4'>
                <div className="cartParent">
                    <div className="cartImageBox">
                        <div className="CartimgBox">
                            <img src={domain + '/uploads/offers/' + props.imgPath} alt="" />
                        </div>
                    </div>
                    <div className='lineSeparate'></div>
                    <div className="cartContentData">
                        <div className="cartItem">
                            <h3>{props.categoryNameAr}</h3>
                            <h3>{props.nameAr}</h3>
                            {
                                i18n.language == 'ar' ? (
                                    <>
                                        <h2> <IoIosPricetags style={{ color: "green" }} /> <span> {props.price}</span> ريال سعودي   </h2>
                                    </>
                                ) : (
                                    <h2> <IoIosPricetags style={{ color: "green" }} /> <span> {props.price}</span>  SAR    </h2>
                                )
                            }
                            <hr />
                            {
                                i18n.language == 'ar' ? (
                                    <>
                                        <h3> <IoIosPricetags style={{ color: "green" }} /> <span> {props.price * props.quantity} </span> ريال سعودي </h3>
                                    </>
                                ) : (
                                    <>
                                        <h3> <IoIosPricetags style={{ color: "green" }} /> <span> {props.price * props.quantity} </span>  SAR </h3>
                                    </>
                                )
                            }

                            <div className="cartQuantatiy">
                                <Button
                                    variant='outline-success'
                                    className='btnQuan'
                                    onClick={() => handleIncreaseQuantity(props._id)}
                                >
                                    <span> <FaPlus /></span>
                                </Button>
                                <span
                                    
                                >
                                    {count}
                                </span>
                                <Button
                                    variant='outline-danger'
                                    className='btnQuan'
                                    onClick={() => handleDicreaseQuantity(props._id)}
                                >
                                    <span> <FaMinus />
                                    </span></Button>
                            </div>

                            <div className="offerDetails">
                                <Button
                                    variant='outline-secondary'
                                    className='me-2 btnCartOption'
                                >
                                    {t('showDetails')}
                                </Button>

                                <Button
                                    variant='outline-danger'
                                    className='me-2 btnCartOption'
                                    onClick={() => DeleteFromCart(props._id)}
                                >
                                    {
                                        i18n.language == 'ar' ? "حذف من السلة" : "Delete From Cart"
                                    }
                                </Button>
                                <Button
                                    variant='outline-success'
                                    className='me-2 btnCartOption'
                                    onClick={() => DeleteFromCart(props._id)}
                                >
                                    {
                                        i18n.language == 'ar' ? "أضافة الي المفضلة" : "Add To Favorite"
                                    }
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <hr />
        </>
    )
}

export default CardItem