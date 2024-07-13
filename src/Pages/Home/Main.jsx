import { } from 'react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Image
// import img1 from '../../assets/Images/4350391@3x.png'
// import img2 from '../../assets/Images/4170388@3x.png'
import mainImage from '../../../public/Images/image.png'
import { Col, Container, Row } from 'react-bootstrap';

import { mainData } from '../../assets/Data Of Pages/Main.data.js'
function Main() {
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,

            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
            {
                mainData.map((item) => (
                    <>
                        <SwiperSlide key={item.id}>
                            {/* <img src={img1} /> */}
                            <div className="mainParent">
                                <Container>
                                    <Row>
                                        <Col lg='6' md='12' sm='12' className='mainContentParent'>
                                            <div className="content-data    ">
                                                <h1>{item.title}</h1>
                                                <p>{item.text}</p>
                                                <button id={item.id}> Book now </button>
                                            </div>
                                        </Col>
                                        <Col lg='6' md='12' sm='12' className='mainContentParent justify-content-end'>
                                            <div className="imgBox">
                                                <img src={getImageUrl(item.ImgUrl)} alt="img" width={100} height={100} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </SwiperSlide>
                    </>
                ))
            }

        </Swiper>
    )
}

export default Main

function getImageUrl(imageName) {
    return new URL(`../../../public/Images/${imageName}`, import.meta.url).href;
}

{/* <div className="mainParent">
<div className="mainContent">
<span className='shape'></span>
<span className='shape2'></span>
<div className="mainContent-data">
    <h1>Beauty Clinic</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sunt nisi, iusto impedit rerum provident?</p>
    <button> Book now </button>
</div>
</div>
<div className="mainImage">
<span className='shape3'></span>
<div className="imgBox">
    <img src={mainImage} alt="img" width={100} height={100} />
</div>
</div>
</div> */}

