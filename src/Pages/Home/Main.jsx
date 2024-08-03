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
// import mainImage from '../../../public/Images/image.png'
// import { Col, Container, Row } from 'react-bootstrap';

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
                            <img src={getImageUrl(item.bg)} alt="" />

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

