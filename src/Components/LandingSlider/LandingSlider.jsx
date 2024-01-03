/* eslint-disable import/no-anonymous-default-export */

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";
import styles from "./style.module.css"
const LandingPageSlider = () => {
    return (
        <div className={styles.slider} >

            <Swiper className={styles.slide}
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false

                }}
                loop
                pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide   >
                    <img className={styles.sliderimg} src="https://plus.unsplash.com/premium_photo-1677483425235-980fae409996?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
                </SwiperSlide>
                <SwiperSlide  >
                    <img className={styles.sliderimg} src="https://plus.unsplash.com/premium_photo-1677483425235-980fae409996?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
                </SwiperSlide>
                <SwiperSlide  >
                    <img className={styles.sliderimg} src="https://plus.unsplash.com/premium_photo-1677483425235-980fae409996?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
                </SwiperSlide>

                ...
            </Swiper>
        </div>
    );
};
export default LandingPageSlider