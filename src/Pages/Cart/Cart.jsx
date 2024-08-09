import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col,  Button } from 'react-bootstrap';
import '../Offers/Offers.style.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../Redux/Reducers/Cart';
import CardItem from './CardItem';
import { IoMdPricetags } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import './Cart.style.css'
function Cart() {
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch]
    )
    const CartItems = useSelector((state) => state.Cart.AllData)
    // console.log(CartItems.data.cart.items)
    const cartData = CartItems?.data?.cart?.items || [];

    // Step 1: State to hold cart items and total price
    const [cart, setCart] = useState(cartData);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscount , setTotalDiscount] = useState(0)
    const [discount , setDiscount] = useState(0)

    // Step 2: Calculate total price
    useEffect(() => {
        const calculateTotalPrice = () => {
            let total = 0;
            let subtotal = 0;
            let finalTotal = 0;
            cart.forEach(item => {
                total += item.offer.price * item.quantity;
                subtotal += total * ((item.offer.discount) / 100 ) 
                finalTotal = total - subtotal ;
            });
            setTotalPrice(finalTotal);
            setTotalDiscount(total)
            setDiscount(subtotal)
        };

        calculateTotalPrice();
    }, [cart]);

    // Step 3: Handle quantity change
    const handleQuantityChange = (id, newQuantity) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart); // Ensure this triggers a re-render
    };

    // This effect ensures cart is initialized with fetched data
    useEffect(() => {
        setCart(cartData);
    }, [CartItems]);


    return (
        <section
            className={i18n.language == 'en' ? "dirLtR" : "dirRtL"}
        >

            <div className="sectionHeader">
                <span className='headerSpan'></span>
                <h1 className='text-center sectionTitle'>  {t('YourCart')} </h1>
                <span className='headerSpan'></span>
            </div>

            {
                cartData ? (
                    <>
                        <div className="containerUser">
                            <Row>
                                <Col lg='8' md='6' sm='12'>
                                    <div className="optionParent">
                                        <Row>
                                            {
                                                i18n.language === 'en' ?
                                                    cartData?.map((item) => (
                                                        <>
                                                            <CardItem
                                                                imgPath={item.offer.images[item.offer.images.length - 1]}
                                                                categoryNameAr={item.offer.categoryNameEn}
                                                                nameAr={item.offer.nameEn}
                                                                quantity={item.quantity}
                                                                price={item.offer.price}
                                                                _id={item.offer._id}
                                                                onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}


                                                            />
                                                        </>
                                                    )
                                                    )
                                                    :
                                                    (
                                                        cartData?.map((item) => (
                                                            <>
                                                                <CardItem
                                                                    imgPath={item.offer.images[item.offer.images.length - 1]}
                                                                    categoryNameAr={item.offer.categoryNameAr}
                                                                    nameAr={item.offer.nameAr}
                                                                    quantity={item.quantity}
                                                                    price={item.offer.price}
                                                                    _id={item.offer._id}
                                                                    onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}

                                                                />
                                                            </>
                                                        )
                                                        )
                                                    )
                                            }
                                        </Row>
                                    </div>
                                </Col>

                                <Col lg='4' md='6' sm='12'>
                                    <div className="totalParent">
                                        <div className="totalContent">
                                            <h1>
                                                {
                                                    i18n.language == 'ar' ? "السعر كاملا : " : "Total Price : "
                                                }
                                            </h1>
                                            <h2 className='totalPrice'>
                                                <IoMdPricetags style={{ color: "green" }} /> {totalPrice.toFixed(2) + " " + t('SAR')}
                                            </h2>
                                            <h2 className='totalBefore'>
                                                <IoMdPricetags style={{ color: "green" }} /> {totalDiscount.toFixed(2) + " " + t('SAR')}
                                            </h2>
                                            <h2 className=''>
                                                <RiDiscountPercentFill style={{ color: "green" }} /> {t('discount') + " " +  discount.toFixed(2) }
                                            </h2>
                                            <Button
                                                variant='outline-success'
                                                className='btn-checkout'
                                            >
                                                {
                                                    i18n.language == 'ar' ? "الدفع" : "Checkout"
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </>
                ) : (
                    <h1 className='text-center '>
                        {
                            i18n.language == 'ar' ? " لا يوجد عناصر في السلة " : " No Items In The Cart "
                        }
                    </h1>
                )
            }

        </section>
    )
}

export default Cart