import React, { useEffect } from 'react'
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
import { useGlobalContext } from '../../context/AppContext';
import useFetch from '../../hooks/useFetch';
const LandingPageTrip = () => {
    const { eventdata, setEventdata } = useGlobalContext();

    const { data: eventapiData, isPending, error } = useFetch('https://bykojourney.adaptable.app/api/package/getall');
    useEffect(() => {
        // Update eventcontent only when apiData or isPending changes
        setEventdata({
            ...eventdata,
            data: eventapiData,
            error: error,
            load: isPending,
        });
    }, [eventapiData, isPending, error]);
    return (


        <div className={styles.tripssection}>
            <div>
                <h2>
                    Tick amazing <span> experience</span> off your bucket list
                </h2>
            </div>
            <br />
            <Swiper className={styles.tripslide}

                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{

                    280: {
                      // width: 280,
                      slidesPerView: 1,
                    },
                    857: {
                      // width: 576,
                      slidesPerView: 2,
                    },
                    1200: {
                      // width: 768,
                      slidesPerView: 3,
                    },
                  }}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                loop

            >
                {
                    !isPending && eventapiData?.map((eventx) => (
                        // console.log(eventx)
                        <SwiperSlide className={styles.slides}  >
                            <Tripcard key={eventx._id} data={eventx} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>

    )
}

export default LandingPageTrip
