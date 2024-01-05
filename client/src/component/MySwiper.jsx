import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

function MySwiper({ sequence }) {
    const img = [
        "https://automechanica.com/uploads/client/logo/9/LandRover.png",
        "https://automechanica.com/uploads/client/logo/11/Mercedes.png",
        "https://automechanica.com/uploads/client/logo/13/Nissan_Old.png",
        "https://automechanica.com/uploads/client/logo/15/Skoda_New.png"
    ]
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={
                {
                    delay: 2000,
                    disableOnInteraction: false
                }
            }
        >
            <SwiperSlide>
                <div className="swiper-slide"><img src={img[sequence[0]]} alt="" id="item1" className="item" /></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-slide"><img src={img[sequence[1]]} alt="" id="item2" className="item" /></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-slide"><img src={img[sequence[2]]} alt="" id="item3" className="item" /></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-slide"><img src={img[sequence[3]]} alt="" id="item4" className="item" /></div>
            </SwiperSlide>
        </Swiper>
    );
};
export default MySwiper