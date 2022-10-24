import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from "react-router-dom";


const Carousel2 = ({items}) => {


    return (
        <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
            items?.map(item=><SwiperSlide>
              <Link to={`/hotelDetails/${item.id}`}>
                <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url(${item?.img})` }}>
                    <div className="hero-overlay bg-opacity-10">
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-bold">{item?.name}</h1>
                        </div>
                    </div>
                    </div>
                </div>
                </Link>
              </SwiperSlide>)
        } 
      </Swiper>
    </>
    );
};

export default Carousel2;