import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";
import styles from "./style.module.css"
import Tripcard from '../Tripcard/Tripcard';
const LandingPageTrip = () => {
    return (
        <div className={styles.tripssection}>
            <div>
                <h2>
                    Tick amazing <span> experience</span> off your bucket list
                </h2>
            </div>
            <br />
            <Swiper className={styles.tripslide}
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                // navigation
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                loop
                // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide   >
                    <Tripcard />
                </SwiperSlide>
                <SwiperSlide  >
                    <Tripcard />
                </SwiperSlide>
                <SwiperSlide  >
                    <Tripcard />
                </SwiperSlide>
                <SwiperSlide  >
                    <Tripcard />
                </SwiperSlide>

                {/* ... */}
            </Swiper>
        </div>
    )
}

export default LandingPageTrip
