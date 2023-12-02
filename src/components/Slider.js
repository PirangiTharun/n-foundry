import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.css';
import SliderCard from './SliderCard';


const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='sliderContainer'>
            <h1 className='sliderHeading'>Process functions<br></br> performed</h1>
            <div className='flexClass'>
                <p className='activeIndex'>0{activeIndex+1}</p>
                <Swiper
                    style={{ color: 'white'}}
                    spaceBetween={-10}
                    slidesPerView={2}
                    onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><SliderCard text="Login into smart assistance and home screen" index={0} /></SwiperSlide>
                    <SwiperSlide><SliderCard text="Selection of text and samples" index={1} /></SwiperSlide>
                    <SwiperSlide><SliderCard text="Manage smart assistant section" index={2} /></SwiperSlide>
                    <SwiperSlide><SliderCard text="Manage smart assistant section" index={3} /></SwiperSlide>
                    <SwiperSlide><SliderCard text="Ata synchronization" index={4} /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Slider