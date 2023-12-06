import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.css';
import SliderCard from './SliderCard';
import { NewSlider } from './NewSlider';


const Slider = () => {
    const [active, setActive] = useState(0);
    const [deviceWidth, setDeviceWidth] = useState(1920);
    useEffect(()=>{
        setDeviceWidth(window.innerWidth);
        // eslint-disable-next-line
    },[window.innerWidth]);
    return (
        <div className='sliderContainer'>
            <h1 className='sliderHeading'>Process functions<br className='br'></br> performed</h1>
            <div className='flexClass'>
                <p className='activeIndex'>0{Math.max(active+1,1)}</p>
                {/* <Swiper
                    spaceBetween={-10}
                    slidesPerView={deviceWidth>1000?2:1}
                    onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><SliderCard text="Login into smart assistance and home screen" index={0} /></SwiperSlide>
                    <SwiperSlide><SliderCard text="Selection of text and samples" index={1} /></SwiperSlide>
                    <SwiperSlide><SliderCard text="Manage smart assistant section" index={2} /></SwiperSlide>
                    <SwiperSlide><SliderCard text="Manage smart assistant section" index={3} /></SwiperSlide>
                    <SwiperSlide><SliderCard text="Ata synchronization" index={4} /></SwiperSlide>
                </Swiper> */}
                <NewSlider active={active} setActive={setActive} />
            </div>
        </div>
    )
}

export default Slider